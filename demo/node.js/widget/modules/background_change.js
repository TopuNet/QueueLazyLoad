/*
	20160803
	白梦超
	切换body背景
*/
/*
var _opt : {
			obj : 'section.topu', //根据次盒子的scroll值切换背景
			src_1 : '/images/bg1.png',	//背景大图路径1
			src_2 : '/images/bg2.png'   //背景大图路径2
		}
*/

var background_change = {
	init : function(opt){
		var yuan_opt = {
			obj : 'section.project',
			src_1 : '/images/bg1.png',
			src_2 : '/images/bg2.png'
		}
		_opt = $.extend(yuan_opt, opt);
		//监听scroll事件
		background_change.window_scroll()
	},
	//监听scroll值
	window_scroll : function(){
		$(window).scroll(function(){
			background_change.change(_opt)
		})
	},
	//切换body背景
	change : function(_opt){
		var scroll_top = $(window).scrollTop();
		var obj = $(_opt.obj);
		var obj_bottom_px = parseInt(obj.offset().top);

		if (obj_bottom_px < scroll_top){
			$('body').css({'background': 'url('+_opt.src_1+') center center no-repeat','background-attachment':'fixed'});
		}else {
			$('body').css({'background': 'url('+_opt.src_2+') center center no-repeat','background-attachment':'fixed'});
		}
	}
}

if (typeof define === "function" && define.amd) {
    define([], function() {
        return background_change;
    });
}