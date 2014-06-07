$(function() {
    'use strict';

    function getTabs(tabItem, tabContent) {
        $('.' + tabContent + ':first-child').fadeIn();
        $('.' + tabItem).on('click', function() {
            $(this).addClass(tabItem + '--active')
                .siblings()
                .removeClass(tabItem + '--active');
            $('.' + tabContent).eq($(this).index())
                .fadeIn()
                .siblings()
                .hide();
        });
    }

    getTabs('tab-controls__item', 'tab-item');

    responsiveNav(".nav-collapse");
    $('.nav-toggle').html('<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>');

    $('.flexslider').flexslider({
        'animation': 'fade',
        'directionNav': false,
    });
});