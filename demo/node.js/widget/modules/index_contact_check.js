/*
	马升苑
	2016-08-03
            首页下方提交表单内容
            check_box: 提交的表单
            input_alert：如果input为空，添加此class名进行提示
*/


var index_contact_check = {
  
    init: function(opt) {
        var opt_default = {
            check_box: "",
            clean_button: "",
            call_back: "",
            ajax_url:""
        }
        opt = $.extend(opt_default, opt);
        index_contact_check.contact_submit(opt.check_box,opt.clean_button,opt.call_back,opt.ajax_url);
    },
    contact_check:function(){
                        if(check_button_obj.find("#contact_check_1").val()==""){
                            check_button_obj.find("#contact_check_1").addClass("wrong_input");
                            return;
                        }
                        if(check_button_obj.find("#contact_check_2").val()==""){
                            check_button_obj.find("#contact_check_2").addClass("wrong_input");
                            return;
                        }
                        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                        if(!myreg.test(check_button_obj.find("#contact_check_3").val())){
                            check_button_obj.find("#contact_check_4").addClass("wrong_input");
                            return;
                        }
                        var re1 = /^1\d{10}$/;
                        var re2 = /^0\d{2,3}-?\d{7,8}$/;
                        if((!re1.test(check_button_obj.find("#contact_check_4").val()))&&(!re2.test(check_button_obj.find("#contact_check_4").val()))){
                            check_button_obj.find("#contact_check_4").addClass("wrong_input");
                            return;
                        }
    },
    contact_submit:function(check_box,clean_button,call_back,ajax_url) {
                //获取提交按钮
                var check_button_obj = $(check_box);
                //点击提交按钮之后检查input是否为空
                check_button_obj.submit(function(){
                            index_contact_check.contact_check(); 
                            //挨个提取input 的值
                            var val_1=check_button_obj.find("input").eq(0).val();
                            var val_2=check_button_obj.find("input").eq(1).val();
                            var val_3=check_button_obj.find("input").eq(2).val();
                            var val_4=check_button_obj.find("input").eq(3).val();
                            var val_5=check_button_obj.find("input").eq(4).val();
                            //然后用ajax传给后台
                            $.ajax({ 
                                        url: ajax_url,
                                        data: {

                                        },
                                        success: function(data){
                                            if(data=="ok"){
                                                call_back;
                                            }else{    
                                            }
                                        }
                            });  
                            return false;
                });
                //当input获取焦点的时候，隐藏提示class
                check_button_obj.find("input").focus(function(){
                    $(this).removeClass("wrong_input");
                });
                check_button_obj.find("input").siblings().click(function(){
                    $(this).siblings().removeClass("wrong_input");
                });
                check_button_obj.find("clean_button").click(function(){
                    check_button_obj.find("input").val("");
                });
    }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return index_contact_check;
    });
}
