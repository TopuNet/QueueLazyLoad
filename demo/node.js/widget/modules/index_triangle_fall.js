/*
	马升苑
	2016-07-29
            首页的三角形动画
	down_name: 需要发生动画的三角形对象
*/


var index_triangle_fall = {
  
    init: function(opt) {
        var opt_default = {
            down_name: "",
            arr:[0,1,2,3,4,5,6,7,8,9,10]
        }
        opt = $.extend(opt_default, opt);


                //获取定义的盒子对象
                var down_name_obj = $(opt.down_name);

                var ArrList= opt.arr;
                //从一个给定的数组arr中,随机返回num个不重复项
                function getArrayItems() {

                    //测试
                    var plan_number=0;
                    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
                    var temp_array = new Array();
                    for (var index in ArrList) {
                        temp_array.push(ArrList[index]);
                    }
                        console.log(temp_array)
                    for (var i = 0; i<down_name_obj.children().length; i++) {
                        //判断如果数组还有可以取出的元素,以防下标越界
                        if (temp_array.length>0) { 

                                //在数组中产生一个随机索引
                                var arrIndex = Math.floor(Math.random()*temp_array.length);
                                //动画时间
                                var plan_a = Math.random()+0.2;
                                //最外盒子延迟时间
                                var plan_b = i*0.1+Math.random()*0.4;
                                //中间盒子延迟时间
                                var plan_c = plan_a+plan_b;
                                //最里盒子延迟时间
                                var plan_d = plan_a/2+plan_c;
                                //启用动画函数
                                down_name_obj.eq(temp_array[arrIndex]).css("animation","down_animate "+plan_a+"s ease-out "+plan_b+"s 1 normal").css("animation-fill-mode","both");
                                down_name_obj.eq(temp_array[arrIndex]).children().css("animation","down_animate02 "+plan_a/3+"s ease-out "+plan_c+"s 1 normal").css("animation-fill-mode","both");
                                down_name_obj.eq(temp_array[arrIndex]).children().children().css("animation","down_animate03 "+plan_a/5+"s ease-out "+plan_d+"s 1 normal").css("animation-fill-mode","both");
                                down_name_obj.eq(temp_array[arrIndex]).css("-webkit-animation","down_animate "+plan_a+"s ease-out "+plan_b+"s 1 normal").css("animation-fill-mode","both");
                                down_name_obj.eq(temp_array[arrIndex]).children().css("-webkit-animation","down_animate02 "+plan_a/3+"s ease-out "+plan_c+"s 1 normal").css("animation-fill-mode","both");
                                down_name_obj.eq(temp_array[arrIndex]).children().children().css("-webkit-animation","down_animate03 "+plan_a/5+"s ease-out "+plan_d+"s 1 normal").css("animation-fill-mode","both");
                                
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
                    if (($(window).scrollTop()>down_name_obj.offset().top-$(window).height()+400)&&!$(down_name_obj).hasClass('not')) {
                        $(down_name_obj).addClass('not')
                        getArrayItems();
                    }
                });
                if (($(window).scrollTop()>down_name_obj.offset().top-$(window).height()+400)&&!$(down_name_obj).hasClass('not')) {
                        $(down_name_obj).addClass('not')
                        getArrayItems();
                    }

    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return index_triangle_fall;
    });
}

