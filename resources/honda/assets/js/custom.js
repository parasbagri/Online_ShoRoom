$(document).ready(function () {
    "use strict";
    /* Navbar Fixed */



    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {
            $('#nav-sticky').addClass('navbar-fixed-top fadeInDown');
            $('#top-bar').hide();
            $('#sticky-header').show();
        }

        if ($(window).scrollTop() < 101) {
            $('#nav-sticky').removeClass('navbar-fixed-top fadeInDown');
            $('#top-bar').show();
            // $('#sticky-header').hide();
        }
    });


    /*Scroll Top*/
    $('.scroll-to-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 151) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



    // Hide nav on click
    $(".navbar-nav li a").click(function () {
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
            $(".navbar-collapse").collapse('hide');
        }
    });

    //Flexi Slider

    $('#home-banner-slider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false,
        pauseOnHover: true,
        pauseOnAction: false
    });



    /*Home page Product carousal*/
    // store the slider in a local variable
    var $window = $(window),
        flexslider = {
            vars: {}
        };

    // tiny helper function to add breakpoints
    function getGridSize() {
        return (window.innerWidth < 500) ? 1 :
            (window.innerWidth < 600) ? 2 :
            (window.innerWidth > 900) ? 3 : 4;
    }

    $('#products').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true,
        animationLoop: false,
        itemWidth: 170,
        itemMargin: 5,
        minItems: 1,
        maxItems: 3,
        //minItems: getGridSize(), // use function to pull in initial value
        //maxItems: getGridSize() // use function to pull in initial value
    });


    // check grid size on resize event
    $window.resize(function () {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
    });


    $('#calc-emi-btn').click(function () {
        $('#calc-emi-con').show();
    });

});