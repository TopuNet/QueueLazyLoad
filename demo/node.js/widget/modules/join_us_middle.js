/*
	马升苑
	2016-08-15
            join_us页面
            当屏幕滚动到某个尺寸时，产生居中动画
*/

var join_us_middle = {
    init: function(opt) {
        var opt_default = {
            fadein_box1: ".join_pic .content_1",//左上运动的盒子
            fadein_box2: ".join_pic .content_2",//右上运动的盒子
            fadein_box3: ".join_pic .content_3",//左下运动的盒子
            fadein_box4: ".join_pic .content_4"//右下运动的盒子
        }
        opt = $.extend(opt_default, opt);

        //获取发生动画的第一个的盒子
        var fadein_box1_obj = $(opt.fadein_box1);
        //获取发生动画的第二个的盒子
        var fadein_box2_obj = $(opt.fadein_box2);
        //获取发生动画的第三个的盒子
        var fadein_box3_obj = $(opt.fadein_box3);
        //获取发生动画的第四个的盒子
        var fadein_box4_obj = $(opt.fadein_box4);


        function fadein_leftright1(){
            fadein_box1_obj.show().css({left:"-2px",top:"3px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"98px",top:"103px",opacity:1,filter:"alpha(opacity=100)"},800);
            fadein_box2_obj.show().css({left:"910px",top:"3px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"810px",top:"103px",opacity:1,filter:"alpha(opacity=100)"},800);
        }
        function fadein_leftright2(){
            fadein_box3_obj.show().css({left:"-2px",top:"405px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"98px",top:"305px",opacity:1,filter:"alpha(opacity=100)"},800);
            fadein_box4_obj.show().css({left:"910px",top:"405px",opacity:0,filter:"alpha(opacity=0)"}).animate({left:"810px",top:"305px",opacity:1,filter:"alpha(opacity=100)"},800);
        }

       $(window).scroll(function(){
            if (($(window).scrollTop()>fadein_box1_obj.parent().offset().top-$(window).height()+500)&&(!fadein_box1_obj.hasClass("not"))) {
                fadein_box1_obj.addClass("not");
                fadein_leftright1();
                fadein_leftright2();
            }

        });

       if (($(window).scrollTop()>fadein_box1_obj.parent().offset().top-$(window).height()+500)&&(!fadein_box1_obj.hasClass("not"))) {
                fadein_box1_obj.addClass("not");
                fadein_leftright1();
                fadein_leftright2();
            }

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return join_us_middle;
    });
}
