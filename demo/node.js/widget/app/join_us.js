/*
	白梦超
	20160812
	加入我们页js
*/

define(["modules/baidu_map", "lib/jquery.min"], function($baidu_map) {

    var join_us = {
        init : function(){
            var baidu_map_para = {
                map_obj_id: "baidu_map", // 地图容器ID。无默认值。
                enableScrollWheelZoom: false, // 允许滚轮缩放。默认值：true
                NavigationControl: true, // 左上角缩放尺。默认值：true
                ScaleControl: false, // 左下角比例尺。默认值：true
                OverviewMapControl: false, // 右下角小地图：true
                CurrentCity: "北京", // 当前城市。默认值：北京
                MapTypeControl: true, // 右上角地图种类，仅当设置当前城市后可用。默认值：true
                PointKeywords: "北京市东城区礼士宾馆", // 定点标注搜索。无默认值
                PointBounce: true, // 定点标注跳动。默认值：true
                PointClick: function(e) {}, // 定点标注点击回调。无默认值。
                // SearchKeywords: "礼士宾馆", // 搜索关键词。无默认值
                Zoom: 16 // 默认缩放比例。默认值：16
            }

        $baidu_map.init(baidu_map_para);
        }        
    }

    return join_us;
});
