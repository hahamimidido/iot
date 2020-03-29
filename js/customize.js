// customize js
$(function() {
    $('.header').load("header.htm");
    $('.aside').load("aside.htm");
    $('.aside_dark').load("aside_dark.htm");
    // tab
    // var _duration_speed = 400, //設定每張圖轉場動畫速度
    //     _vertical_slider_speed = 2000, //設定每張圖停留時間
    //     _autoplay_restart = 5000; //設定多久開始啟用autoplay
    $('.tab_slider').each(function(index, el) {
        var _itemLength = $(this).find('.tab_control ul li').length;
        var _pic_index = 0;
        $(this).find('.tab_control ul li').eq(_pic_index).addClass('active');
        $(this).find('.tab_control ul li')
        // tabcontent
        $(this).find('.tab_content ul li').hide();
        $(this).find('.tab_content ul li').eq(_pic_index).fadeIn();
        $(this).find('.tab_control ul li').each(function(index, el) {
            $(this).find('a').off().click(function(e) {
                var _pic_index = $(this).parent('li').index();
                $(this).parent('li').addClass('active').siblings('li').removeClass('active');
                $(this).parents('.tab_control').siblings('.tab_content').find('ul li').fadeIn().eq(_pic_index).addClass('active').siblings('li').removeClass('active').stop(true, true).fadeOut();
                e.preventDefault();
            });
        });



    });
});
