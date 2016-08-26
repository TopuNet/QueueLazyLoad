/*
	马升苑
	2016-08-11
            service—customized页面
            当屏幕滚动到某个尺寸时，产生居中动画
*/

var service_customized_move = {
    init: function(opt) {
        var opt_default = {
            fadein_box1: ".pic_box .pic_1",
            fadein_box2: ".pic_box .pic_3",
            fadein_box3: ".pic_box .pic_4",
            fadein_box4: ".pic_box .pic_5",
            fadein_box5: ".pic_box .pic_2"
        }
        opt = $.extend(opt_default, opt);

        //获取发生动画的第一个的盒子
        var fadein_box1_obj = $(opt.fadein_box1);
        //获取发生动画的第一个的盒子
        var fadein_box2_obj = $(opt.fadein_box2);
        //获取发生动画的第一个的盒子
        var fadein_box3_obj = $(opt.fadein_box3);
        //获取发生动画的第一个的盒子
        var fadein_box4_obj = $(opt.fadein_box4);
        //获取发生动画的第一个的盒子
        var fadein_box5_obj = $(opt.fadein_box5);


        function fadein_1(){
            fadein_box1_obj.show().css({left:"-83px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"117px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_2(){
            fadein_box2_obj.show().css({top:"29px",opacity:0,filter:"alpha(opacity=0)"}).animate({top:"229px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_3(){
            fadein_box3_obj.show().css({left:"580px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"380px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_4(){
            fadein_box4_obj.show().css({top:"483px",opacity:0,filter:"alpha(opacity=0)"}).animate({top:"283px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_5(){
            fadein_box5_obj.show().css({left:"-60px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"140px",opacity:1,filter:"alpha(opacity=100)"},800);
            
        }

        function fadein_leftright(){
            fadein_1();
            setTimeout(fadein_2,500);
            setTimeout(fadein_3,1000);
            setTimeout(fadein_4,1500);
            setTimeout(fadein_5,2000);
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
        return service_customized_move;
    });
}
