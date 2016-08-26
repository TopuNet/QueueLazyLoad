/*
	白梦超
	20160803
	小块随着鼠标在屏幕上移动而移动
*/

var screen_mouseMove = {
	init : function(opt){
		var _opt= {
				obj_class : 'section.screen_move' //传递一组对象，无默认值
			}
		_opt = $.extend(_opt, opt);
		//执行小块移动
		screen_mouseMove.mouse_move(_opt);
	},
	//小块随着鼠标在屏幕上移动而移动
	mouse_move : function(_opt){
		//获取可是区宽，高
		var screen_wid_px = $(window).width();
		var screen_hei_px = $(window).height();
		var opt_obj=$(_opt.obj_class);
		//鼠标移动事件
		$(window).mousemove(function(event){
			var x=event.clientX;
			var y=event.clientY;
			var top_move = 0;
			var left_move = 0;


			var _i=0;
			len = opt_obj.length;
			for (;_i<len;_i++){
				top_move = parseInt(x/screen_wid_px*parseInt(opt_obj.eq(_i).css('width'))/10);
				left_move = parseInt(y/screen_hei_px*parseInt(opt_obj.eq(_i).css('height'))/10);
				opt_obj.eq(_i).css({'margin-left':top_move,'margin-top':left_move})
			}
		})
	}
}

if (typeof define === "function" && define.amd) {
    define([], function() {
        return screen_mouseMove;
    });
}