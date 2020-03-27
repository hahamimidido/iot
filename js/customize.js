// customize js
$(function() {
    $('.header').load("header.htm");
    $('.aside').load("aside.htm");
    $('.aside_dark').load("aside_dark.htm");


    // tab
    var _duration_speed = 400, //設定每張圖轉場動畫速度
        _vertical_slider_speed = 2000, //設定每張圖停留時間
        _autoplay_restart = 5000; //設定多久開始啟用autoplay
    $('.tab_slider').each(function(index, el) {
        var _itemLength = $(this).find('.tab_control ul li').length;
        var pic_index = 0;
        $(this).find('.tab_control ul li').eq(pic_index).find('a').addClass('active');


        // tabcontent
        $(this).find('.tab_content ul li').hide();
        $(this).find('.tab_content ul li').eq(pic_index).fadeIn();
    });
});
