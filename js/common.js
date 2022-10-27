$(document).ready(function () {
  $('.works-slider-big').on('init', function(event, slick){
    //AOS.init();
  });
  
  $('.works-slider-big').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: true,
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

  $('.select-slide').selectize();


  $('.modal-window__close').on('click', function() {
    $('.modal-window').removeClass('active');
    $('html').removeClass('body-overflow');
    return false;
  })
  $(document).mouseup( function(e){ // событие клика по веб-документу
    let div = $('.modal-window-inner'); 
    if ( !div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.modal-window').removeClass('active');
        $('html').removeClass('body-overflow');
    }
  });

  $('.open-estimate').on('click', function() {
    $('.modal-window--estimate').addClass('active');
    $('html').addClass('body-overflow');
    return false;
  })
  $('.open-engineer').on('click', function() {
    $('.modal-window--engineer').addClass('active');
    $('html').addClass('body-overflow');
    return false;
  })
  $('.open-form').on('click', function() {
    $('.modal-window--form').addClass('active');
    $('html').addClass('body-overflow');
    return false;
  })
})