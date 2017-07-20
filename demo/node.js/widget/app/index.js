/*
    20160802
    白梦超
    首页运动效果
*/

define(['modules/index_height100', 'modules/index_scroll_down', 'modules/nav_still_top', 'modules/leav_message_window', 'modules/qq_message_window', 'modules/background_change', 'modules/index_banner_switch', 'modules/index_reversal_ninebox', 'modules/goto_top', 'modules/mask', 'modules/index_cascade', 'modules/screen_mouseMove', 'lib/GrayScale', 'modules/index_triangle_fall', 'lib/QueueLazyLoad', 'lib/jquery.min'], function($index_height100, $index_scroll_down, $nav_still_top, $leav_message_window, $qq_message_window, $background_change, $index_banner_switch, $index_reversal_ninebox, $goto_top, $mask, $index_cascade, $screen_mouseMove, $GrayScale, $index_triangle_fall, $QueueLazyLoad) {
    var index = {



        init: function() {

            var qll = new $QueueLazyLoad();

            var qll_opt = {
                Queue: ["section.banner", "section.html_nav_bao", "section.imagine", "section.service", "section.topu"],
                Callback_success_Queue: [function() {
                        console.log("section.banner loaded");
                        $("section.banner").show(0);
                    },
                    function() {
                        console.log("section.html_nav_bao loaded");
                    },
                    function() {
                        console.log("section.imagine loaded");
                        $("section.banner div.click_down").fadeIn(200, function() {

                            //监听顶部banner中的按钮点击
                            var index_scroll_down = {
                                big_box: "section.banner",
                                small_button: "div.click_down"
                            }
                            $index_scroll_down.init(index_scroll_down);
                        });
                    },
                    function() {
                        console.log("section.service loaded");
                    },
                    function() {
                        console.log("section.topu loaded");
                    }
                ],
                Callback_success_All: function() {
                    console.log("mission complete");
                }
            };
            qll.init(qll_opt);

            return;

            //顶部banner100高度
            var opt_100 = {
                big_box: "section.banner"
            }
            $index_height100.init(opt_100);

            //监听顶部banner中的按钮点击
            var index_scroll_down = {
                big_box: "section.banner",
                small_button: "div.click_down"
            }
            $index_scroll_down.init(index_scroll_down);

            //导航吸顶
            var nav_still_top = {
                still_top_box: "section.html_nav"
            }
            $nav_still_top.init(nav_still_top);

            //监听导航联系客服弹框点击
            var leav_message_window = {
                fadein_button: "div.server",
                alertbox_box: "section.contact_popup",
                fadeout_button: "section.contact_popup span.close_popup"
            }
            $leav_message_window.init(leav_message_window);

            //监听右侧qq悬浮框点击
            var qq_message_window = {
                fadein_button: "div.qq_small",
                alertbox_box: "div.qq_bao",
                fadeout_button: "span.qq_close"
            }
            $qq_message_window.init(qq_message_window);

            //监听切换背景
            var background_change = {
                obj: 'section.project',
                src_1: '/images/bg1.png',
                src_2: '/images/bg2.png'
            }
            $background_change.init(background_change);

            //中部八张小图轮播
            var index_banner_switch = {
                banner_button: "div.project_span span",
                banner_switch: "div.ul_bao ul",
                banner_black: "div.ul_bao div.mask",
                now_class: "on"
            }
            $index_banner_switch.init(index_banner_switch);

            //九宫格翻转监听
            var index_reversal_ninebox = {
                reversal_box: "section.form div.left"
            }
            $index_reversal_ninebox.init(index_reversal_ninebox);

            //回到顶部按钮监听
            var goto_top = {
                button_selector: "section.html_to_top",
                panel_selector: window,
                durTime_ms: 200,
                callback_success: null
            }
            $goto_top(goto_top);

            //底部二维码弹层
            var mask = {
                click: 'section.foot_p span.weixin', //点击显示弹层的按钮
                section_mask: 'section.weixin_mask', //控制弹层显示，隐藏的层
                mask_div: 'section.weixin_mask div.mask_div' //点击隐藏弹层的按钮
            }
            $mask.init(mask)

            //中部四个图片滑动进入
            var index_cascade = {
                cascade_box: "div.process_main" //最外层盒子
            }
            $index_cascade.init(index_cascade);

            //随鼠标移动的小图
            var screen_mouseMove = {
                obj_class: 'div.screen_move'
            }
            $screen_mouseMove.init(screen_mouseMove);

            //图片灰度
            var GrayScale = {
                box_selector: 'body.index', // 作用范围选择器，如：body.index。无默认值
                hover_restore: true // 鼠标悬停时是否还原图片（即取消灰色滤镜），默认true
            }
            $GrayScale.init(GrayScale)

            //首页上部小块掉落
            var index_triangle_fall = {
                down_name: "div.div_down",
                arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            }
            $index_triangle_fall.init(index_triangle_fall)
        }
    }

    return index;
})
