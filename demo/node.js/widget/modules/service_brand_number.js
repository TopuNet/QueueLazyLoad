/*
	马升苑
	2016-08-02
            递增翻转一个容器里的盒子
            reversal_box: 存放动画盒子的父级
*/


var service_brand_number = {
  
    init: function(opt) {
        var opt_default = {
            reversal_box: ".brand_web .box",
            reversal_class:"flash"
        }
        opt = $.extend(opt_default, opt);

        //获取九宫格
        var reversal_box_obj = $(opt.reversal_box);

        function reversal(){
            for (var i = 0; i < reversal_box_obj.children().length; i++) {
                reversal_box_obj.children().eq(i).show().css("animation-delay",i+"s").css("-webkit-animation-delay",i+"s").addClass(opt.reversal_class);
            }
            
        }

        $(window).scroll(function(){
            win_size = reversal_box_obj.offset().top-$(window).height()+300;
            if ($(window).scrollTop()>win_size) {
                if (!reversal_box_obj.hasClass("not")) {
                    reversal_box_obj.addClass("not");
                    reversal(); 
                }

            }
        });
        win_size = reversal_box_obj.offset().top-$(window).height()+300;
            if ($(window).scrollTop()>win_size) {
                if (!reversal_box_obj.hasClass("not")) {
                    reversal_box_obj.addClass("not");
                    reversal(); 
                }

            }

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return service_brand_number;
    });
}
