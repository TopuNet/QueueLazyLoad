/*
	马升苑
	2016-08-11
            service—customized页面
            当屏幕滚动到某个尺寸时，产生居中动画
*/

var service_customized_middle = {
    init: function(opt) {
        var opt_default = {
            fadein_box1: ".customized_pic1 .left",
            fadein_box2: ".customized_pic1 .right"
        }
        opt = $.extend(opt_default, opt);

        //获取发生动画的第一个的盒子
        var fadein_box1_obj = $(opt.fadein_box1);
        //获取发生动画的第二个的盒子
        var fadein_box2_obj = $(opt.fadein_box2);


        function fadein_leftright(){
            fadein_box1_obj.show().css({left:"-80px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"120px",opacity:1,filter:"alpha(opacity=100)"},800);
            fadein_box2_obj.show().css({right:"-120px",opacity:0,filter:"alpha(opacity=0)"}).animate({right:"80px",opacity:1,filter:"alpha(opacity=100)"},800);
        }

       $(window).scroll(function(){
            if (($(window).scrollTop()>fadein_box1_obj.parent().offset().top-$(window).height()+500)&&(!fadein_box1_obj.hasClass("not"))) {
                fadein_box1_obj.addClass("not");
                fadein_leftright();
            }
        });

       if (($(window).scrollTop()>fadein_box1_obj.parent().offset().top-$(window).height()+500)&&(!fadein_box1_obj.hasClass("not"))) {
                fadein_box1_obj.addClass("not");
                fadein_leftright();
            }

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return service_customized_middle;
    });
}
