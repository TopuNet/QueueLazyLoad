/*
	马升苑
	2016-08-03
            找到需要垂直居中的文字，使其垂直居中
            text_check：需要进行垂直居中的文字标签
*/

var index_middle_text = {
  
    init: function(opt) {
        var opt_default = {
            text_check: ""
        }
        opt = $.extend(opt_default, opt);

         //获取需要居中的文字标签
        var text_check_obj = $(opt.text_check);

        //把标签垂直居中
        for (var i = 0; i<text_check_obj.length; i++) {
            text_check_obj.eq(i).css("margin-top",-text_check_obj.eq(i).height()/2);
        }

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return index_middle_text;
    });
}
