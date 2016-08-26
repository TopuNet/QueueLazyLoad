/*
	马升苑
	2016-08-03
            点击按钮切换banner
            banner_button：点击切换banner 的按钮
            banner_switch：banner 的名字
            banner_black：需要调成父级高度的遮罩名字
            now_class：按钮点击后的样式class

*/

var index_banner_switch = {
  
    init: function(opt) {
        var opt_default = {
            banner_button: "",
            banner_switch: "",
            banner_black: "",
            now_class: ""
        }
        opt = $.extend(opt_default, opt);

        //获取点击按钮
        var now_button = opt.now_class;
        //获取点击按钮
        var banner_button_obj = $(opt.banner_button);
        //获取切换的banner
        var banner_switch_obj = $(opt.banner_switch);
        //获取切换的banner里的遮罩
        var banner_black_obj = $(opt.banner_black);
        //装banner图的大盒子宽度设置为小盒子的总和
        banner_switch_obj.parent().width(banner_switch_obj.length*$(window).width());
        banner_switch_obj.width($(window).width());
        //banner图里的遮罩高度改为它的父级的高度
        for (var i = 0; i<banner_black_obj.length; i++) {
                banner_black_obj.eq(i).height(banner_black_obj.eq(i).parent().height());
                banner_black_obj.find('dl').css({'height':banner_black_obj.height(),'width':banner_black_obj.width()})
            }
        //点击按钮之后，切换到对应的banner
        banner_button_obj.click(function(){
            banner_button_obj.removeClass(now_button);
            $(this).addClass(now_button);
            banner_switch_obj.parent().animate({marginLeft:-banner_switch_obj.width()*$(this).index()},300);
        });

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return index_banner_switch;
    });
}
