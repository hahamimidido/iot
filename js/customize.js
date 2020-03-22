// customize js
$(function() {
    $('.header').load("header.htm");
    $('.aside').load("aside.htm");
    $('.aside_dark').load("aside_dark.htm");
    // var resizeChartTimer;
    // $(window).on('resize', function() {
    //     clearTimeout(resizeChartTimer);
    //     resizeChartTimer = setTimeout(function() {
    //         location.reload();
    //     }, 50);
    // });
    // $('.dropdown').each(function(index, el) {
    //     $(this).find('.dropdown-content').hide();
    //     $(this).find('.dropdown-btn').off().click(function(e) {
    //     	$(this).next('.dropdown-content').addClass('show');
    //         e.preventDefault();
    //     });
    // });
});
