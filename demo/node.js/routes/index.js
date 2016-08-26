/*
 *白梦超
 *2016-06-01
 *首页页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//首页页面路由
router.get("/", function(req, res, next) {

    res.render("../views/index.html", {
        "common": "首页",
        "menu": "1"
    });
});


module.exports = router;
