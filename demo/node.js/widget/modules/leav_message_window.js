/*
	马升苑
	2016-07-29
	点击按钮，在按钮位置出来一个逐步变大的客服框
            fadein_button: 点击能出现盒子的按钮
            fadeout_button: 点击能隐藏盒子的按钮
	alertbox_box: 点击后出现的盒子
            width: 点击后出现的盒子的宽度
            height: 点击后出现的盒子的高度
*/

var leav_message_window = {
    init: function(opt) {
        var opt_default = {
            fadein_button: "",
            alertbox_box: "",
            fadeout_button: ""
        }
        opt = $.extend(opt_default, opt);

        //获取点击显示的按钮
        var fadein_obj = $(opt.fadein_button);
        //获取出现后的盒子
        var alertbox_obj = $(opt.alertbox_box);
        //获取点击隐藏的按钮
        var fadeout_obj = $(opt.fadeout_button);
        //获取出现后的盒子的宽度
        var alertbox_width = alertbox_obj.css("width");
        //获取出现后的盒子的高度
        var alertbox_height = alertbox_obj.css("height");
        //获取到的按钮的坐标
        var fadein_top = fadein_obj.offset().top;
        var fadein_left = fadein_obj.offset().left;
        //获取当前的scroll
        var fadein_scrollTop;
        var fadein_scrollLeft;
        var marginLeft_px = -parseInt(alertbox_width)/2;
        var marginTop_px = -parseInt(alertbox_height)/2;

        function fadein_alertbox(){
            if ($(fadein_obj).hasClass("not")) {
                return;
            }
            $(fadein_obj).addClass("not");
            fadein_top = fadein_obj.offset().top;
            fadein_left = fadein_obj.offset().left;
            fadein_scrollTop = $(window).scrollTop();
            fadein_scrollLeft = $(window).scrollLeft();
            
            alertbox_obj.css("position","fixed").css("height","0px").css("width","0px").css("top",fadein_top-fadein_scrollTop).css("left",fadein_left-fadein_scrollLeft);
            alertbox_obj.show().animate({height:alertbox_height,width:alertbox_width,marginLeft:marginLeft_px,marginTop:marginTop_px,top:"50%",left:"50%"},300);
        }

        fadein_obj.click(function() {
            fadein_alertbox();
        });

        function fadeout_alertbox(){
            fadein_top = fadein_obj.offset().top;
            fadein_left = fadein_obj.offset().left;
            fadein_scrollTop = $(window).scrollTop();
            fadein_scrollLeft = $(window).scrollLeft();
            alertbox_obj.show().animate({height:"0px",width:"0px",marginLeft:0,marginTop:0,top:fadein_top-fadein_scrollTop,left:fadein_left-fadein_scrollLeft},300,function(){
                $(fadein_obj).removeClass("not");
                alertbox_obj.hide();
            });
        }

        fadeout_obj.click(function() {
            fadeout_alertbox();
        });



    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return leav_message_window;
    });
}
