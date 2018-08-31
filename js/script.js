"use strict";

/**
 * Resize Dynamic Images
 */
function resizeImages()
{
    resizeHomeImg();
    resizeDim();
    resizeIcons();
}


/**
 * Makes title image fill entire window on resize
 */
function resizeHomeImg()
{
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var imgContainer = $('#home');

    imgContainer.attr('style', 'height: ' + winHeight + 'px');
}

/*
 * Resize about me image to be height of text
 */
function resizeDim()
{
    var boxHeight = $('#about .content-box').outerHeight();
    var dim = $('#about-img-container');

    dim.attr('style', 'height: ' + boxHeight + 'px');
}

function resizeIcons()
{
    $('#timeline .timeblock-image-container').attr('style', 'width: ' + ($(window).width() / 4) + 'px');
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
 * Main execution
 */
$(document).ready(function() {
    const topOffset = 52; //menu height
    resizeImages();
    $('.section').css('padding-top', topOffset);

    $('body').scrollspy({target: 'header .navbar', offset: topOffset}); //activate scrollspy
    switchActiveLink(); //initialize active link
    switchToFloating(); //switch to floating if starting off on non-home page

    //event listeners
    window.addEventListener('resize', resizeImages);
    $(document).on('click', 'a[href^="#"]', function() {
        event.preventDefault();
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 750);
    });
    $(window).on('activate.bs.scrollspy', switchActiveLink);
    $(window).on('activate.bs.scrollspy', switchToFloating);
});
