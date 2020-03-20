// 自行加入的JS請寫在這裡
$(function() {
    // var _windowW = $(window).width();
    // $(window).on("load resize", function(e) {
    //     if (_windowW < 992) {
    //         $('aside').removeClass('hidden');
    //     }
    // });
    // 選單控制
    $('body').append('<div class="overlay"></div>');
    $('aside').prepend('<a href="#" class="close_btn"></a>');
    //
    $('aside').find('.toggle_menu_btn').clone().prependTo('header');
    $('header').find('.toggle_menu_btn').off().click(function(e) {
        $('aside').toggleClass('open');
        $('.overlay').toggleClass('show');
        $('.wrapper').toggleClass('noscroll');
        $(this).blur();
        e.preventDefault();
    });
    // 手機版關閉左側選單
    function _CLOSEMENU() {
        $('aside').removeClass('open');
        $('.overlay').removeClass('show');
        $('.wrapper').removeClass('noscroll');
        $(this).blur();
        e.preventDefault();
    }
    $('.overlay').off().click(function(e) {
        _CLOSEMENU();
    });
    $('aside').find('.close_btn').off().click(function(e) {
        _CLOSEMENU();
    });
    // 選單控制下拉
    $('aside nav ul li').each(function(index, el) {
        if ($(this).children('ul').length > 0) {
            $(this).addClass('li_hasChild');
        }
    });
    $('aside nav ul ul').hide();
    $('.li_hasChild>a').each(function(index, el) {
        $(this).off().click(function(e) {
            $(this).parent('li').toggleClass('active');
            $(this).parents('li').siblings().removeClass('active').find('ul').stop(true, true).slideUp('800', 'easeOutQuint');
            $(this).next('ul').stop(true, true).slideToggle('800', 'easeOutQuint');
            e.preventDefault();
        });
    });
    var sideStatus = false;
    $('aside').find('.toggle_menu_btn').off().click(function(e) {
        if (!sideStatus) {
            $('aside').addClass('hidden');
            $('header').addClass('full');
            $('.content').addClass('full');
            sideStatus = true;
        } else {
            $('aside').removeClass('hidden');
            $('header').removeClass('full');
            $('.content').removeClass('full');
            sideStatus = false;
        }
        $(this).blur();
        e.preventDefault();
    });
    // var resizeChartTimer;
    // $(window).on('resize', function() {
    //     clearTimeout(resizeChartTimer);
    //     resizeChartTimer = setTimeout(function() {
    //         location.reload();
    //     }, 50);
    // });
});
