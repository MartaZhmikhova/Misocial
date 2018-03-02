/*
$(function() {
  smoothScrool(1000);
});

function smoothScrool (duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if ( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}
*/


$(document).ready(function(){
  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      if (scroll < 130) {
        $("header").addClass("top_menu_up");
      } else {
        $("header").removeClass("top_menu_up");
      }
    });

//active menu
$('.top_menu ul li a').each(function () { // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href;  // получаем адрес ссылки
        if(location == link) { // при совпадении адреса ссылки и адреса окна
            $(this).parent("li").addClass('active'); // добавляем класс
        }
    });

  //burger
  $(".burger").click(function(){
    $(this).next().slideToggle();
  });

  $('.burger').click(function(){
    $('.burger').toggleClass('opened');
    $('.top_nav').click(function(){
      $('.burger').removeClass('opened');
      $(".top_nav").css("display","none");
    });
  });


  //carousel slaider
  $(".testimonials_carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: true
  });
  $(".feature_carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: ['<i class="icon-circle-left" ></i>','<i class="icon-circle-right"></i>']
  });
  $(".articies_carousel").owlCarousel({
      items: 1,
      loop:true,
      dots: true
  });
  $( ".form_message" ).submit(function( event ) {
        $('.thank-you-message').css('display', 'block');
        this.reset();
        event.preventDefault();
    });

  //scroll mouse
      $(".down_btn, .b_link").click(function(event){
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $("html, body").animate({
              scrollTop: top}, 1000);
      });
/*
      //modal window
          $('.js-overlay-campaign').fadeIn();
          $('.js-overlay-campaign').addClass('disabled');
          $('.js-close-campaign').click(function() {
              $('.js-overlay-campaign').fadeOut();
          });
          $(document).mouseup(function (e) {
              var popup = $('.js-popup-campaign');
              if (e.target!=popup[0]&&popup.has(e.target).length === 0){
                  $('.js-overlay-campaign').fadeOut();
              }
          });
          $(window).on('load', function () {
              setTimeout(function(){
                  if($('.js-overlay-campaign').hasClass('disabled')) {
                      return false;
                  } else {
                      $(".js-overlay-campaign").fadeIn();
                  }
              }, 10000);
          });
*/

});
