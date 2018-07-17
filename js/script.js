"use strict";

/**
 * Makes title image fill entire window on resize
 */
function resizeHomeImg()
{
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var imgContainer = $('#home');
    //var image = $('#home img');

    imgContainer.attr('style', 'height: ' + winHeight + 'px');
    //imgContainer.attr('style', 'width: ' + winWidth + 'px');
    //image.attr('style', 'height: ' + winHeight + 'px');
}

/**
 * Switch active attribute for navigation links (Scrollspy + Boostrap 4 workaround)
 */
function switchActiveLink()
{
    var navItemList = $('.navbar-nav').children().each(function() {
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

/**
 * Switch to floating navigation after title page has passed
 */
function switchToFloating()
{
    let link = $('.navbar-nav').find('.nav-link.active').attr('href');
    if (link !== '#home')
    {
        $('header nav').addClass('floatingNav');
    }
    else
    {
        $('header nav').removeClass('floatingNav');
    }
}

/**
 * Smooth scroll animation on link click
 */
function smoothScroll()
{
    event.preventDefault();

    $('html, body').animate(
    {
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
}

/**
 * Main execution
 */
$(document).ready(function() {
    resizeHomeImg();
    let topOffset = document.querySelector(".navbar.fixed-top").offsetHeight; //menu height

    //activate scrollspy
    $('body').scrollspy({target: 'header .navbar', offset: topOffset});
    switchActiveLink(); //initialize active link
    switchToFloating();

    //event listeners
    window.addEventListener('resize', resizeHomeImg);
    $(document).on('click', 'a[href^="#"]', smoothScroll);
    $(window).on('activate.bs.scrollspy', switchActiveLink);
    $(window).on('activate.bs.scrollspy', switchToFloating);
});
