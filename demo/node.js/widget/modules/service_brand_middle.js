/*
	马升苑
	2016-08-11
            service—customized页面
            当屏幕滚动到某个尺寸时，产生居中动画
*/

var service_brand_middle = {
    init: function(opt) {
        var opt_default = {
            fadein_box1: ".brand_map .line",//产生滑动线动画的盒子
            fadein_box2: ".brand_map .brand_son"//产生聚拢动画的盒子
        }
        opt = $.extend(opt_default, opt);

        //获取发生动画的第一个的盒子
        var fadein_box1_obj = $(opt.fadein_box1);
        //获取发生动画的第二个的盒子
        var fadein_box2_obj = $(opt.fadein_box2);

        function fadein_animate0(){
                fadein_box2_obj.eq(0).show().css({left:"-80px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"122px",opacity:1,filter:"alpha(opacity=100)"},500);
          
        }

        function fadein_animate1(){
                fadein_box2_obj.eq(1).show().css({left:"870px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"670px",opacity:1,filter:"alpha(opacity=100)"},500);  
         
        }

        function fadein_animate2(){
                fadein_box2_obj.eq(2).show().css({left:"-80px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"122px",opacity:1,filter:"alpha(opacity=100)"},500);
          
        }

        function fadein_animate3(){
                fadein_box2_obj.eq(3).show().css({left:"870px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"670px",opacity:1,filter:"alpha(opacity=100)"},500);  
         
        }

        function fadein_leftright(){

            var fadein_number=800;
            var fadein_box1_height = fadein_box1_obj.css("height");

            fadein_animate0();
            setTimeout(fadein_animate1,fadein_number);
            setTimeout(fadein_animate2,fadein_number*2);
            setTimeout(fadein_animate3,fadein_number*3);
            fadein_box1_obj.show().css({height:"0px"}).animate({height:fadein_box1_height},fadein_box2_obj.length*fadein_number-fadein_number);  
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
        return service_brand_middle;
    });
}
