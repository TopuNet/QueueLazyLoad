/*
	马升苑
	2016-07-29
	点击按钮，隐藏或显示qq客服窗口
            fadein_button: 点击能出现盒子的按钮
            fadeout_button: 点击能隐藏盒子的按钮
	alertbox_box: 点击后出现的盒子
*/



var qq_message_window = {
  
    init: function(opt) {
        var opt_default = {
            fadein_button: "",
            alertbox_box: "",
            fadeout_button: ""
        }
        opt = $.extend(opt_default, opt);

        //获取点击显示的按钮
        var fadein_obj = $(opt.fadein_button);
        //获取点击隐藏的按钮
        var fadeout_obj = $(opt.fadeout_button);
        //获取出现后的盒子
        var alertbox_obj = $(opt.alertbox_box);
        //获取最小化之前的尺寸
        var alertbox_width = alertbox_obj.width();
        var fadein_width = fadein_obj.width();

        function fadein_alertbox(){
            fadein_obj.hide();
            alertbox_obj.show().animate({width:alertbox_width},300,function(){
                alertbox_obj.removeClass("not");
            });
            }

        fadein_obj.click(function() {
            if (alertbox_obj.hasClass("not")) {
                fadein_alertbox();
            }
        });

        function fadeout_alertbox(){
            alertbox_obj.addClass("not");
            alertbox_obj.animate({width:fadein_width},300,function(){
                alertbox_obj.hide();
                fadein_obj.show();
            });
        }

        fadeout_obj.click(function() {

            
                fadeout_alertbox();
         
        });

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return qq_message_window;
    });
}
