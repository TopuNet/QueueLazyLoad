/*
	马升苑
	2016-08-10
            service—app页面
            当屏幕滚动到某个尺寸时，产生居中动画
*/

var service_app_move = {
    init: function(opt) {
        var opt_default = {
            left_box: ".pic_box .pic_1",
            middle_box: ".pic_box .pic_2",
            right_box: ".pic_box .pic_3"
        }
        opt = $.extend(opt_default, opt);

        //获取发生动画的左边的盒子
        var left_box_obj = $(opt.left_box);
        //获取发生动画的中间的盒子
        var middle_box_obj = $(opt.middle_box);
        //获取发生动画的右边的盒子
        var right_box_obj = $(opt.right_box);

        function fadein_left(){
            left_box_obj.show().css({left:"-100px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"100px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_middle(){
            middle_box_obj.show().css({top:"-140px",opacity:0,filter:"alpha(opacity=0)"}).animate({top:"60px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_right(){
            right_box_obj.show().css({left:"1075px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"875px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_leftright(){
            fadein_left();
            setTimeout(fadein_middle,500);
            setTimeout(fadein_right,1000);
        }

       $(window).scroll(function(){
            if (($(window).scrollTop()>left_box_obj.parent().offset().top-$(window).height()+400)&&(!left_box_obj.hasClass("not"))) {
                left_box_obj.addClass("not");
                fadein_leftright();
            }
        });

       if (($(window).scrollTop()>left_box_obj.parent().offset().top-$(window).height()+400)&&(!left_box_obj.hasClass("not"))) {
                left_box_obj.addClass("not");
                fadein_leftright();
            }

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return service_app_move;
    });
}
