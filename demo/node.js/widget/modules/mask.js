/*
	白梦超
	20160803
	点击显示、隐藏二维码弹层
*/

/*var _opt={
	click : $('section.foot_p span.weixin'),   //点击显示弹层的按钮
	section_mask : $('section.section_mask'),	//控制弹层显示，隐藏的层
	mask_div : $('section.section_mask div.mask_div')	//点击隐藏弹层的按钮
}*/

var mask = {
	init : function(opt){
		var _opt={
			click : 'section.foot_p span.weixin',   //点击显示弹层的按钮
			section_mask : 'section.weixin_mask',	//控制弹层显示，隐藏的层
			mask_div : 'section.weixin_mask div.mask_div'	//点击隐藏弹层的按钮
		}
		_opt = $.extend(_opt, opt);
		//监听点击事件
		mask.click_code_showOrHide(_opt);
	},
	//点击按钮显示、隐藏微信二维码
	click_code_showOrHide : function(_opt){
		//获取点击显示弹层的按钮
		var _opt_click=$(_opt.click);
		//控制弹层显示，隐藏的层
		var section_mask = $(_opt.section_mask);
		//点击隐藏弹层的按钮
		var mask_div = $(_opt.mask_div);
		//点击显示二维码弹层
		_opt_click.click(function(){
			section_mask.css('display','block');
		})
		//点击隐藏二维码弹层
		mask_div.click(function(){
			section_mask.css('display','none');
		})
	}
}

if (typeof define === "function" && define.amd) {
    define([], function() {
        return mask;
    });
}