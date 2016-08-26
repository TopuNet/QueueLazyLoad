/*
	马升苑
	2016-08-10
            获取十个小盒子的setoff().top
            根据scroll的改变来让十个盒子轮流出现
*/

var service_all_show = {
  
    init: function() {
        
         //获取需要监听动画的盒子
        var map_1_top = $(".map .map_1").offset().top;
        var map_2_top = $(".map .map_2").offset().top;
        var map_3_top = $(".map .map_3").offset().top;
        var map_4_top = $(".map .map_4").offset().top;
        var map_5_top = $(".map .map_5").offset().top;
        var map_6_top = $(".map .map_6").offset().top;
        var map_7_top = $(".map .map_7").offset().top;
        var map_8_top = $(".map .map_8").offset().top;
        var map_9_top = $(".map .map_9").offset().top;
        var map_10_top = $(".map .map_10").offset().top;

        function play_number(n){
            $(".map .map_"+n).animate({opacity:1,filter:"alpha(opacity=100)"},300);
            //$(".map .map_"+n).fadeOut(300);
        }

        
        function paly_animate(){
                    if ($(window).scrollTop()+$(window).height()-40>map_1_top&&(!$(".map .map_1").hasClass("not"))) {
                        $(".map .map_1").addClass("not");
                        setTimeout(play_number(1),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_2_top&&(!$(".map .map_2").hasClass("not"))) {
                        $(".map .map_2").addClass("not");
                        setTimeout(play_number(2),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_3_top&&(!$(".map .map_3").hasClass("not"))) {
                        $(".map .map_3").addClass("not");
                        setTimeout(play_number(3),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_4_top&&(!$(".map .map_4").hasClass("not"))) {
                        $(".map .map_4").addClass("not");
                        setTimeout(play_number(4),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_5_top&&(!$(".map .map_5").hasClass("not"))) {
                        $(".map .map_5").addClass("not");
                        setTimeout(play_number(5),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_6_top&&(!$(".map .map_6").hasClass("not"))) {
                        $(".map .map_6").addClass("not");
                        setTimeout(play_number(6),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_7_top&&(!$(".map .map_7").hasClass("not"))) {
                        $(".map .map_7").addClass("not");
                        setTimeout(play_number(7),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_8_top&&(!$(".map .map_8").hasClass("not"))) {
                        $(".map .map_8").addClass("not");
                        setTimeout(play_number(8),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_9_top&&(!$(".map .map_9").hasClass("not"))) {
                        $(".map .map_9").addClass("not");
                        setTimeout(play_number(9),300);
                    }
                    if ($(window).scrollTop()+$(window).height()-40>map_10_top&&(!$(".map .map_10").hasClass("not"))) {
                        $(".map .map_10").addClass("not");
                        setTimeout(play_number(10),300);
                    }
        }

        $(window).scroll(function(){
            paly_animate();
        });
        
        paly_animate();

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return service_all_show;
    });
}
