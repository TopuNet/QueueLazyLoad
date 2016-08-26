/*
	马升苑
	2016-08-02
            随机翻转一个容器里的盒子
            reversal_box: 存放九宫格的盒子
*/


var index_reversal_ninebox = {
  
    init: function(opt) {
        var opt_default = {
            reversal_box: ".reversal_box",
            nine_box:[0,1,2,3,4,5,6,7,8]
        }
        opt = $.extend(opt_default, opt);

        //获取九宫格
        var reversal_box_obj = $(opt.reversal_box);
        //定义随机数字
        var reversal_list= opt.nine_box;
        //当scrolltop大于这个值时，触发事件
        var win_size;

        function reversal(){
            
            //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
                    var temp_array = new Array();
                    for (var index in reversal_list) {
                        temp_array.push(reversal_list[index]);
                    }
                    for (var i = 0; i<reversal_box_obj.children().length; i++) {
                        //判断如果数组还有可以取出的元素,以防下标越界
                        if (temp_array.length>0) { 

                                //在数组中产生一个随机索引
                                var arrIndex = Math.floor(Math.random()*temp_array.length);
                                //启用动画函数
                                reversal_box_obj.children().eq(temp_array[arrIndex]).css("animation-delay",i*0.5+"s").css("-webkit-animation-delay",i*0.5+"s");
                                reversal_box_obj.children().eq(temp_array[arrIndex]).addClass("flash");
                                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                                temp_array.splice(arrIndex, 1);
                            
                            //setTimeout(plan_a,i*200+Math.random()*200);
                        } else {
                            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                            break;
                        }
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
        return index_reversal_ninebox;
    });
}
