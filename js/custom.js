(function ($) {

    // PRE LOADER
    $(window).load(function(){

      var $container = $('.gallery_items');
        $container.isotope({
            filter: '*',
            animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
      });

      $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
      });   
    });

    $('.preloader').fadeOut(1000); // set duration in brackets 
      
    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })


    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
