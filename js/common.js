$(document).ready(function () {
  $('.works-slider-big').on('init', function(event, slick){
    AOS.init();
  });
  
  $('.works-slider-big').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: false,
  });
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  
  $('.politics-item').on('click', function() {
    $('.politics-item').removeClass('active');
    $(this).addClass('active');
    return false;
  })
})