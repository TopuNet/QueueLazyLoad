# QueueLazyLoad 插件 v1.1.1
### 按照队列顺序延迟(懒)加载DOM中的图片
### 安装：npm install TopuNet-QueueLazyLoad

文件结构：
-------------
		1. /QueueLazyLoad.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中

页面引用：
-------------

原生引用

        1. 页面底部引用最新版 /inc/Jquery.min.js#1.x.x 或 zepto.min.js
		2. Jquery后引用 /jq/QueueLazyLoad.js

requireJS引用

        依赖QueueLazyLoad.js和(jquery.min.js#1.x 或 zepto.js)，成功后返回对象QueueLazyLoad。

调用方法：
--------------

1. 图片和背景图：

		图片标签将图片路径写入属性 qll-img 中，
			如：<img qll-img="/images/logo.jpg" alt="logo" />

		背景图将background写入属性 qll-bg 中，
			如：<section class="banner start_hidden" qll-bg="background: url('/images/banner.png') center center no-repeat; background-size: cover;">


2. 启动方法：

		$(function(){
			var qll = new QueueLazyLoad();
			qll.init({
	            Queue: ["body"], // 加载DOM选择器队列，数组。此队列中含有"qll-"属性的图片和背景全部加载完成后，会执行回调 并 开始执行下一个选择器的加载，如：["section.top","#main","div.footer"]。默认["body"]。
	            Callback_success_Queue: null, // 队列中每个DOM完成时的回调，方法数组。无默认值。如：[function(){ alert("aa"); },function(){ alert("bb"); },function(){ alert("cc"); }]
	            Callback_success_All: null // 队列全部加载后的回调
	        });
		});


更新历史：
-------------
v1.1.1 (2017-07-20)

		1. 允许一个页面中创建多个轮询实例，各自设置自己的逻辑。
		2. 相应的，修改启动方法（见上文说明）
		
v1.0.7

		1. 修改opt_default多一个逗号的bug
		
v1.0.6

		1. 加载图片时，增加onerror的监听，解决图片不存在时无法向下继续运行的bug
		
v1.0.5

		1. 通过jshint验证
		
v1.0.4

		1. 为兼容IE7/8，调整背景图的调用方式：
			a. background-size单写，如：
				<section class="banner start_hidden" qll-bg="background: url('/images/banner.png') center center no-repeat; background-size: cover;">
				IE7/8不支持background-size，但不影响backgroundImage的修改
			b. 修改js文件。
		2. 修改demo
		3. 修改Readme

v1.0.3

		1. 修改图片加载完成后的装载循环bug，利用闭包

v1.0.2

		1. 修改bug

v1.0.1

		1. 创建项目、完成开发、发布到npm、commit到github
