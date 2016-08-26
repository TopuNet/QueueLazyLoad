/*
    马升苑
    2016-08-03
            点击之后翻到下一屏，且之前的那一屏隐藏
            big_box: 需要隐藏的盒子
            small_button: 产生动画的按钮
*/


var index_scroll_down = {

    init: function(opt) {
        var opt_default = {
            big_box: "",
            small_button: ""
        }
        opt = $.extend(opt_default, opt);


        //获取需要隐藏的盒子
        var big_box_obj = $(opt.big_box);
        //获取点击产生动画的按钮
        var small_button_obj = $(opt.small_button);

        var bOk = true;
        big_box_obj.on("mousewheel DOMMouseScroll", function(e) {
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox  
            if (delta > 0) {
                // 向上滚
                return false;
            } else if (delta < 0) {
                // 向下滚
                if (bOk) {
                    $("section.start_hidden:hidden").show(0);
                    $("html,body").animate({ scrollTop: big_box_obj.height() }, 500, function() {
                        big_box_obj.hide();
                        $(window).scrollTop(0);
                    });
                    bOk = false;
                    return false;
                } else {
                    return false;
                }
            }
        });

        function scroll_down() {
            $("section.start_hidden:hidden").show(0);
            var height_height = big_box_obj.height();
            $("html,body").animate({ scrollTop: height_height }, 500, function() {
                big_box_obj.hide();
                $(window).scrollTop(0);
            });
        }
        small_button_obj.click(function() {
            scroll_down();
        });

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return index_scroll_down;
    });
}
