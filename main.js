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

  $('.slider2').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 1500,
    arrows: false,
  });
  $('.listing').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 1500,
    arrows: false,
  });
  $('[data-fancybox="images"]').fancybox({
    thumbs: {
      autoStart: true
    }
  })
});

function tabChange() {
  var tabs = $('.nav-tabs > li');
  var active = tabs.filter('.active');
  var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
  next.tab('show');
}
$('.tab-pane').hover(function () {
  clearInterval(tabCycle);
}, function () {
  tabCycle = setInterval(tabChange, 5000);
});

// Tab Cycle function
var tabCycle = setInterval(tabChange, 5000)

// Tab click event handler
$(function () {
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab('show')
    tabCycle = setInterval(tabChange, 5000);
  });
});