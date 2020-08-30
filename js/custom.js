$(function(){
    'use strict';
    $('.info-list li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });

    $('.links li a').click(function(){

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);

    });

    $('.links li a').click(function(){

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    $('.faicon .icon').click(function(){

        $('.navbar .links').toggleClass('hidden-sm').toggleClass('hidden-xs');

    });
});