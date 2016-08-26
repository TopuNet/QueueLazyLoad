/*
	马升苑
	2016-07-29
	导航条在页面滚动之后保持顶部
	still_top_box: 需要保持在顶部的nav
*/



var nav_still_top = {
  
    init: function(opt) {
        var opt_default = {
            still_top_box: ""
        }
        opt = $.extend(opt_default, opt);

        //获取定义的盒子对象
        var still_top_obj = $(opt.still_top_box);
        //根据盒子上一个兄弟的底部获取到盒子的坐标
        var still_top_top;
        //获取当前的scrollTop
        var still_top_scrollTop;

        function still_top(){
            //获取到的盒子的坐标
            still_top_top = still_top_obj.parent().offset().top;
            still_top_scrollTop = $(window).scrollTop();
            if(still_top_scrollTop>still_top_top){
                    still_top_obj.css("position","fixed");
            }else{
                    still_top_obj.css("position","relative");
            }
        }

        still_top();

        $(window).scroll(function() {
            still_top();
        });

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return nav_still_top;
    });
}

