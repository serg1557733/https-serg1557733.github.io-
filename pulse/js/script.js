$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1100,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-solid.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-solid.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: false
              }
            }
        ]
      });
  });

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });
    })(jQuery);

  $('.catalog-item__link').each(function(i)
  {
      $(this).on('click',function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');    
      });
    });
  
  $('[data-modal=consultation]').on('click', function() {
          $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('');
    });


  $('.catalog-item__btn').each(function (i){
      $(this).on('click', function(){
        $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
         
        });
 
  $('#order form').validate({
      rules: {
        name: "required",
        phone:"required",
        email: {required: true,
          email: true
        }
      },
      messages: {
        name: "Введите ваше имя",
        phone:"Введите верно ваш номер телефона",
        email: { required: "Введите свою почту",
                  email: "Проверте правильность ввода адреса"},
      },
      });
  $('#consultation form').validate({
    rules: {
      name: "required",
      phone:"required",
      email: {required: true,
        email: true
      }
    },
    messages: {
      name: "Введите ваше имя",
      phone:"Введите верно ваш номер телефона",
      email: { required: "Введите свою почту",
                email: "Проверте правильность ввода адреса"},
    },
    });
  $('#cons-form' ).validate({
      rules: {
        name: "required",
        phone:"required",
        email: {required: true,
          email: true
        }
      },
      messages: {
        name: "Введите ваше имя",
        phone:"Введите верно ваш номер телефона",
        email: { required: "Введите свою почту",
                  email: "Проверте правильность ввода адреса"},
      },
      });
  
  $('input[name=phone]').mask("+380(99)999-9999");

  $('form').submit(function(e) {
      e.preventDefault ();
      $.ajax ({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function(){
          $(this).find("input").val("");


          $('form').trigger('reset');
      });
      return false;
  });

  //Scroll and page up

$(window).scroll(function(){
  if ($(this).scrollTop()>1600)
  {
    $('.arrow-up').fadeIn();
  }
  else
  $('.arrow-up').fadeOut();

});

  $("a[href=#up]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

});
new WOW().init();



 
    
    

