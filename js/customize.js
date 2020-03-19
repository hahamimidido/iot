// 自行加入的JS請寫在這裡
$(function() {
    $('aside nav ul ul').hide();
    $('aside nav ul li a').each(function(index, el) {
        $(this).off().click(function(e) {
            $(this).parent('li').toggleClass('active');
            $(this).parents('li').siblings().removeClass('active').find('ul').stop(true, true).slideUp('800', 'easeOutQuint');
            $(this).next('ul').stop(true, true).slideToggle('800', 'easeOutQuint');
            e.preventDefault();
        });
    });
    var sideStatus = false;
    $('.toggle_menu_btn').off().click(function(e) {
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
