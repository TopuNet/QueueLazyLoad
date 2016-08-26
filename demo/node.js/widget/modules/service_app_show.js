/*
	马升苑
	2016-08-10
            service—app页面
            当屏幕滚动到某个尺寸时，光线变大，四个图片变大出现
*/

var service_app_show = {
    init: function(opt) {
        var opt_default = {
            fadein_box: ".phone .phone_son",
            bebig_box: ".app_guang div"
        }
        opt = $.extend(opt_default, opt);

        //获取发生动画的左边的盒子
        var fadein_box_obj = $(opt.fadein_box);
        //获取发生光线变大动画的盒子
        var bebig_box_obj = $(opt.bebig_box);

        function fadein_leftright(){
            bebig_box_obj.show().css("height","0px").animate({height:"206px"},500,function(){
                fadein_box_obj.show().css({width:"2px",height:"2px",marginLeft:"96px",marginBottom:"172px"}).animate({width:"194px",height:"346px",marginLeft:"0px",marginBottom:"0px"},500);
            });
          }

       $(window).scroll(function(){
            if (($(window).scrollTop()>bebig_box_obj.parent().offset().top-$(window).height()+300)&&(!bebig_box_obj.hasClass("not"))) {
                bebig_box_obj.addClass("not");
                fadein_leftright();
            }
        });

       if (($(window).scrollTop()>bebig_box_obj.parent().offset().top-$(window).height()+300)&&(!bebig_box_obj.hasClass("not"))) {
                bebig_box_obj.addClass("not");
                fadein_leftright();
            }

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return service_app_show;
    });
}
