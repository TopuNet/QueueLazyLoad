/*
	马升苑
	2016-08-02
            将一个盒子设置成全屏显示
            big_box: 需要全屏的盒子
*/


var index_height100 = {
  
    init: function(opt) {
        var opt_default = {
            big_box: ""
        }
        opt = $.extend(opt_default, opt);

           //获取100%显示的盒子
        var big_box_obj = $(opt.big_box);

        function height100(){
            big_box_obj.height($(window).height());
        }

        height100();

    }
};

if (typeof define === "function" && define.amd) {
    define([], function() {
        return index_height100;
    });
}
