/*
	马升苑
	2016-08-15
            点击之后翻到下一屏，且之前的那一屏隐藏
            cascade_box: 发生动画的盒子的父级
*/


var index_cascade = {
  
    init: function(opt) {
        var opt_default = {
            cascade_box: ""//第一层盒子
        }
        opt = $.extend(opt_default, opt);


        //获取需要隐藏的盒子
        var cascade_box_obj = $(opt.cascade_box);



        function scroll_down6(){
            cascade_box_obj.children("dl").eq(3).css("left","632px").show().animate({left:"948px"},300);
        }

        function scroll_down5(){
            cascade_box_obj.children("div").eq(2).css("left","632px").show().animate({left:"884px"},300);
            setTimeout(scroll_down6,500);
        }

        function scroll_down4(){
            cascade_box_obj.children("dl").eq(2).css("left","316px").show().animate({left:"632px"},300);
            setTimeout(scroll_down5,500);
        }

        function scroll_down3(){
            cascade_box_obj.children("div").eq(1).css("left","316px").show().animate({left:"568px"},300);
            setTimeout(scroll_down4,500);
        }

        function scroll_down2(){
            cascade_box_obj.children("dl").eq(1).show().animate({left:"316px"},300);
            setTimeout(scroll_down3,500);
        }

        function scroll_down1(){
            cascade_box_obj.children("div").eq(0).show().animate({left:"252px"},300);
            setTimeout(scroll_down2,500);
        }

        function scroll_down(){
            if ((!cascade_box_obj.hasClass("not"))&&($(window).scrollTop()>cascade_box_obj.offset().top-$(window).height()+300)) {
                cascade_box_obj.addClass("not");
                cascade_box_obj.children("dl").eq(0).show();
                setTimeout(scroll_down1,500);
            }
        }

        $(window).scroll(function(){
            scroll_down();
        });
        scroll_down();
    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return index_cascade;
    });
}
