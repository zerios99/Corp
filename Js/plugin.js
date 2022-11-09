$(function () {
    
    "use strict";

    // Adjust Slider Height

    var winHeight = $(window).height(),
        upperH    = $(".upper-bar").innerHeight(),
        navH      = $(".navbar").innerHeight()

    $(".slider, .carousel-item").height(winHeight - (upperH + navH));

    // navbar links

    $(".collapse ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active")
    });

    // featchared work shuffle

    $(".featchares-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".shuffle-imges .col-md").css("opacity", "1");
        } else {
            $(".shuffle-imges .col-md").css("opacity", ".8");
            $($(this).data("class")).parent().css("opacity", "1");
        }
    });

    
});

// scroll to top button
$(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
    $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
    });

    // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 300);
  });