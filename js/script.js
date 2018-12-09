"use strict";

function resizeDim()
{
    var boxHeight = $('#about .content-box').outerHeight();
    var dim = $('#about-img-container');
    dim.attr('style', 'height: ' + boxHeight + 'px');
}

function switchActiveLink()
{
    var navItemList = $('.navbar-nav').children().each(function()
    {
        let navItem = $(this);
        let link = navItem.find('.nav-link');
        if (link.hasClass('active'))
        {
            navItem.addClass('active');
        }
        else
        {
            navItem.removeClass('active');
        }
    });
}

function switchToFloating()
{
    let link = $('.navbar-nav').find('.nav-link.active').attr('href');
    if (link !== '#about')
    {
        $('header nav').addClass('floatingNav');
    }
    else
    {
        $('header nav').removeClass('floatingNav');
    }
}
$(document).ready(function()
{
    const topOffset = $('header .navbar').outerHeight();
    resizeDim();
    $('#about').css('padding-top', topOffset);
    $('.coopPost').css('padding-top', topOffset);
    $('.section .sidebar').css('top', topOffset);
    $('body').scrollspy(
    {
        target: '.navbar',
        offset: topOffset
    });
    switchActiveLink();
    switchToFloating();
    window.addEventListener('resize', resizeDim);
    $(document).on('click', 'a[href^="#"]', function()
    {
        event.preventDefault();
        $('html, body').animate(
        {
            scrollTop: $($.attr(this, 'href')).offset().top - topOffset + 1
        }, 750);
    });
    $(window).on('activate.bs.scrollspy', switchActiveLink);
    $(window).on('activate.bs.scrollspy', switchToFloating);
});