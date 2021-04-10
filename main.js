$(document).ready(function () {
  // SLIDER
  //$('.slider').slick({});

  $('.slider').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 1500,
    arrows: false,
  });

});