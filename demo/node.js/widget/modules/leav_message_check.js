/*
	马升苑
	2016-08-03
            导航弹窗提交表单内容
            check_box: 提交的表单
            call_back: 回调函数
            ajax_url： ajax路径
*/

var leav_message_check = {
  
    init: function(opt) {
        var opt_default = {
            check_box: "",
            call_back: "",
            ajax_url: ""
        }
        opt = $.extend(opt_default, opt);
        leav_message_check.message_submit(opt.check_box,opt.call_back,opt.ajax_url);
    },
    message_check:function(){
                            //判断input是否有空
                            if(check_button_obj.find("#message_check_1").val()==""){
                                check_button_obj.find("#message_check_1").addClass("wrong_input");
                                return;
                            }
                            if(check_button_obj.find("#message_check_2").val()==""){
                                check_button_obj.find("#message_check_2").addClass("wrong_input");
                                return;
                            }
                            var re1 = /^1\d{10}$/;
                            var re2 = /^0\d{2,3}-?\d{7,8}$/;
                            if((!re1.test(check_button_obj.find("#message_check_3").val()))&&(!re2.test(check_button_obj.find("#message_check_3").val()))){
                                check_button_obj.find("#message_check_3").addClass("wrong_input");
                                return;
                            }
            },
            message_submit:function(check_box,call_back,ajax_url) {
                        //获取表单名字提交
                        var check_button_obj = $(check_box);
                        //点击提交按钮之后检查input是否为空
                        check_button_obj.submit(function(){
                            leav_message_check.message_check(); 
                            //挨个提取input 的值
                            var val_1=check_button_obj.find("#message_check_1").val();
                            var val_2=check_button_obj.find("#message_check_2").val();
                            var val_3=check_button_obj.find("#message_check_3").val();
                            
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
                            //阻止提交整个页面
                            return false;
                        });
                        //当input获取焦点的时候，隐藏提示class
                        check_button_obj.find("input").focus(function(){
                            $(this).removeClass("wrong_input");
                        });
                        check_button_obj.find("textarea").focus(function(){
                            $(this).removeClass("wrong_input");
                        });
            }
};

if (typeof define === "function" && define.amd) {
    define(["lib/jquery.min"], function() {
        return leav_message_check;
    });
}
