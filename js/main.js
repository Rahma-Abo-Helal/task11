$(function () {
    var strangeCollapse =
      ($(window).innerWidth() - $("nav .container").innerWidth()) / 2;
    $("header nav .strange-collapse").css({
      width: `${$("nav .container").innerWidth()}`,
      left: strangeCollapse,
    });
    $(window).resize(function () {
      strangeCollapse =
        ($(window).innerWidth() - $("nav .container").innerWidth()) / 2;
      $("header nav .strange-collapse").css({
        width: `${$("nav .container").innerWidth()}`,
        left: strangeCollapse,
      });
    });
    $(".menu-icon").click(function () {
      $(".links").slideToggle();
    });
    $(window).on("scroll", function () {
      if ($(window).scrollTop() < 255 && $(window).scrollTop() > 100) {
        $("header").css("transform", "translateY(-100%)");
      } else {
        $("header").css("transition", "0s ease 0s");
        $("header").css("transform", "translateY(0)");
      }
      if ($(window).scrollTop() >= 255) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 385) {
        $("#scroll-top").fadeIn();
      } else {
        $("#scroll-top").fadeOut();
      }
    });
    $("#scroll-top").click(function () {
      $("html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
    $(".animate-xl").css("left", "0");
    $(".animate-xr").css("right", "0");
  });