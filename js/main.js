$(function() {
    'use strict';

    //tabs
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


    //nav
    responsiveNav(".nav-collapse");
    $('.nav-toggle').html('<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>');


    //slider
    var slider=$('#slides');

    slider.superslides({
        'animation': 'fade',
        'play': 10000
    });

    //scroll
    $('a[href^=#]').on('click', function() {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });
});