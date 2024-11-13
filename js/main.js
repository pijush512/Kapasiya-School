$('.banner').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  //   autoplaySpeed: 2000,
  });

  $(document).ready(function () {
    $('.nav_toggle').on('click', function () {
        $('.nav-menu').toggleClass('block');
    });
});
