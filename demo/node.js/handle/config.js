/*
 *@ 高京
 *@ 20150824 
 *@ 全局配置文件，添加属性的话，请先确认没有功能类同的属性存在
 */
var express = require("express");
var multer = require("multer");
var func = require("./functions.js");
var uuid = require('node-uuid');
var config = require('./config.js');
var fs = require('fs'); //文件操作模块，updateMember用


exports.session_secret = "6a8g6k7w2b9h1n8v"; //session密钥

// exports.host = "192.168.1.58"; //接口调用主机地址（本地测试）
// exports.port = 8122; //端口号
exports.host = ""; //接口调用主机地址(网上)
exports.port = 80;

// exports.cookieName_Member = "TouRongQuan2015_Member"; //登录用的cookie名称
// exports.cookies_key = [2, 5, 6, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 22, 25, 29]; //从cookies中取出密码的16位秘钥数组(内部值不能大于32,且从小到大排序)
// exports.cookies_str = "6a8g6k7w2b9h1n8v6a8g6k7w2b9h1n8v"; //定义在cookies中为密码加密的32位随机变量
//exports.ImageDomain = "http://wx.twedding.cn"; //数据库中读取的图片的域名前缀(网上)
// exports.ImageDomain = "http://192.168.1.58:8122"; //数据库中读取的图片的域名前缀（本地测试）

//exports.wechatWall2016_Visitor_cookie = "wechatWall2016_Visitors";

//调用topu接口时访问来源项全局变量
//exports.source="node";



//Advertise,Init,Info缓存
exports.CacheData={
    Advertise:null,
    Init:null,
    Info:null
}

/*
 *@ 陈斌
 *@ 20160301
 *@ 【同步】获得页面公用参数
 *@ 返回：
    {
        seo: {
            ieTitle: '',
            seoKeywords: '',
            seoDescription: ''
        }
    }
 *@ ieTitle_ex：不为空时，seo.ieTitle返回ieTitle_ex - config.CacheData.Init[0].Iinfo + " - " + config.CacheData.Init[2].Iinfo;否则返回config.CacheData.Init[0].Iinfo + " - " + config.CacheData.Init[2].Iinfo;
 *@ seoKeywords：不为空时，返回seoKeywords；否则返回config.CacheData.Init[3].Iinfo;
 *@ seoDescription：不为空时，返回seoDescription；否则返回config.CacheData.Init[4].Iinfo;
 */
exports.GetCommon = function(ieTitle_ex, seoKeywords_ex, seoDescription_ex) {
    var ieTitle=config.CacheData.Init[0].Iinfo + " - " + config.CacheData.Init[2].Iinfo;
    var seoKeywords=config.CacheData.Init[3].Iinfo;
    var seoDescription=config.CacheData.Init[4].Iinfo

    if (ieTitle_ex != undefined && ieTitle_ex != "")
        ieTitle = ieTitle_ex + " - " + ieTitle;
    if (seoKeywords_ex != undefined && seoKeywords_ex != "")
        seoKeywords= seoKeywords_ex;
    if (seoDescription_ex != undefined && seoDescription_ex != "")
        seoDescription = seoDescription_ex;

    return {
        seo:{
            ieTitle:ieTitle,
            seoKeywords:seoKeywords,
            seoDescription: seoDescription
        }
    }
}


/*
 *@ 高京
 *@ 20150911
 *@【同步】设定multer上传目录及规则
 */
exports.multer_diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "UploadFile/temp/");
    },
    filename: function(req, file, cb) {
        var ext = func.GetExtension(file.originalname);
        // var d = new Date().toLocaleDateString().replace(/-/g, "");
        // var r = func.CreateRandomStr(10, 1);
        // cb(null, d + "_" + r + "." + ext);
        var filename = uuid.v4();
        cb(null, filename + "." + ext);
    }
});
/*
 *@高京
 *@20150911
 *@【同步】设定multer文件过滤
 */
exports.multer_fileFilter = function(req, file, cb) {
    var ext = func.GetExtension(file.originalname).toLowerCase();
    if (ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png" || ext == "bmp") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};


/*
 *@ 陈斌
 *@ 20150722
 *@ 【异步】更新Advertise,Init,Info
 */
exports.updateCacheData=function(callback_success){
    var n = 0;
    var updating = function() {
        if (++n < 3)
            return;
        callback_success();
    };

    //更新advertise
    (function(){
        if(config.CacheData.Advertise!=null){
            updating();
            return;
        }
        var Json_Params =({
            "s_Aid": ""
        });
        //生成签名
        func.CreateTopuSignature(Json_Params, function(sign_valid) {
            var opt = {
                url: "http://" + config.host + ":" + config.port + "/Handler/V1.0.1/Advertise.ashx?act=select_list&r=" + Math.random(),
                method: "post_json",
                PostData: {
                    "params":Json_Params,
                    "sign_valid":JSON.parse(sign_valid)
                }
            }
            func.Request(opt, function (data) {
                if (data.error.toLowerCase() == "success") {
                    config.CacheData.Advertise = data.list;
                } else {
                    console.log("\n updateAdvertise:" + JSON.stringify(data));
                }
                updating();

            }, function (err) {
                console.log("\n updateAdvertise_e:" + err);
                updating();
            })
        });
    })();

    //更新Init
    (function(){
        if(config.CacheData.Init!=null){
            updating();
            return;
        }
        var Json_Params =({
            "s_not_Iid": ""
        });
        func.CreateTopuSignature(Json_Params, function(sign_valid) {
            var opt = {
                url: "http://" + config.host + ":" + config.port + "/Handler/V1.0.1/Init.ashx?act=select_list&r=" + Math.random(),
                method: "post_json",
                PostData: {
                    "params":Json_Params,
                    "sign_valid":JSON.parse(sign_valid)
                }
            }
            func.Request(opt, function (data) {
                
                if (data.error.toLowerCase() == "success") {
                    config.CacheData.Init = data.list;
                } else {
                    console.log("\n updateInit:" + JSON.stringify(data));
                }
                updating();

            }, function (err) {
                console.log("\n updateInit_e:" + err);
                updating();
            })
        });
    })();

    //更新Info
    (function(){
        if(config.CacheData.Info!=null){
            updating();
            return;
        }
        var Json_Params =({
            "s_Iid": ""
        });
        func.CreateTopuSignature(Json_Params, function(sign_valid) {
            var opt = {
                url: "http://" + config.host + ":" + config.port + "/Handler/V1.0.1/Info.ashx?act=select_list&r=" + Math.random(),
                method: "post_json",
                PostData: {
                    "params":Json_Params,
                    "sign_valid":JSON.parse(sign_valid)
                }
            }
            func.Request(opt, function (data) {
                if (data.error.toLowerCase() == "success") {
                    config.CacheData.Info = data.list;
                } else {
                    console.log("\n updateInfo:" + JSON.stringify(data));
                }
                updating();
            }, function (err) {
                console.log("\n updateInfo_e:" + err);
                updating();
            })
        });
    })();
}