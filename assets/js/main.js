// Params
var sliderSelector = '.award .swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 3, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.award .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.award .swiper-button-next',
        prevEl: '.award .swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

var aboutClub =  new Swiper('.about-club .swiper-container', {
    navigation: {
        nextEl: '.about-club .swiper-button-next',
        prevEl: '.about-club .swiper-button-prev',
    }
});

$("nav").find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
});