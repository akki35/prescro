/*
 * Javascript functions for CoreLogs.com
 *
 * Date: 6-10-2015
 */

/* global parameters */
var top_nav_width, win_width, win_height, foot_height;

/* function to initialize some global parameters */
function measure() {
    top_nav_width = $('.navbar').outerHeight(true);
    win_width = $(window).width();
    win_height = $(window).height();
    foot_height = $('footer').outerHeight(true);
    body_slide();
}

/* function to auto adjust top margin for the body */
function body_slide() {
    console.log(win_height, top_nav_width, foot_height)
    $('.page').stop().animate({
        /*'margin-top': top_nav_width,*/
        'min-height': (win_height - top_nav_width - foot_height)
    });
}

/* call body_slide when the window loads or resizes */
$(measure);
$(window).on('resize', measure);