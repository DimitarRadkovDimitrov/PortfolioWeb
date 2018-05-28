$(function()
{
    "use strict";

    var topoffset = 50; //menu height
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var image = document.getElementById("homeImg");
    var jumbo = document.getElementById("jumbo");

    image.setAttribute('style', 'height: ' + winHeight + 'px !important');
    jumbo.setAttribute('style', 'top: ' + (winHeight/3) + 'px;');

    //Set the home page image to window height on resize
    window.addEventListener('resize', function(event){
        winHeight = $(window).height();
        winWidth = $(window).width();
        image = document.getElementById("homeImg");
        jumbo = document.getElementById("jumbo");

        image.setAttribute('style', 'height: ' + winHeight + 'px !important');
        jumbo.setAttribute('style', 'top: ' + (winHeight/3) + 'px;');
    });

    //Activate Scrollspy
    $('body').scrollspy({
        target: 'header .navbar',
        offset: topoffset
    });

    //Add floatingNav class
    var hash = $(this).find('li.active a').attr('href');
    if (hash !== '#home')
    {
        $('header nav').addClass('floatingNav');
    }
    else
    {
        $('header nav').removeClass('floatingNav');
    }


    // Add a floatingNav class to nav when scrollspy event fires
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function()
    {
        var hash = $(this).find('li.active a').attr('href');
        if (hash !== '#home')
        {
            $('header nav').addClass('floatingNav');
        }
        else
        {
            $('header nav').removeClass('floatingNav');
        }
    });

    //Simple smooth scroll function
    $(document).on('click', 'a[href^="#"]', function (event)
    {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - topoffset
        }, 0);
    });

    $('.panel-collapse').on('shown.bs.collapse', function () {
        $('html, body').animate({
            scrollTop: $(this).closest('.panel').offset().top - topoffset
        }, 400);
    });
});
