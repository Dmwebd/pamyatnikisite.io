 // var lazyLoadInstance = new LazyLoad({
 //          elements_selector: ".lazy"

 //      });

$(function($) {
    $("img").Lazy();
     $('.objects-block__img, .objects-nav__img').Lazy();
});
$(document).ready(function($) {
  


var offsetTop = $(window).height()*2;
    $(window).scroll(function(event) {
      if($(document).scrollTop() > offsetTop ){
        $('.to_top').addClass('act');
      }else{
        $('.to_top').removeClass('act');
      }
    });
$(".to_top").on("click", function (event) {
      var top = 0;
      $('body,html').animate({scrollTop: top}, 1000);
    });

$('.close, .back-close').on('click', function(event) {
	event.preventDefault();
  if($(this).hasClass('close-nav')){
		$(".nav__wrap").removeClass('active');
    $('.nav-overlay').fadeOut();
	}
  $('.card-js').removeClass('zi0');
  $('.arrows').removeClass('zi0');
    if($(this).hasClass('cln')){
      $('.mn-right-it-1').show();
     $('.mn-right-it-2').hide();
     $('.mn-right-it-3').hide();
    }
  
	$(".overlay").fadeOut();
	$("html").removeClass('stop');
});

$('.burger__wrap').on('click', function(event) {
  event.preventDefault();
  $('.nav__wrap').addClass('active');
  $('.nav-overlay').fadeIn();
});

 $('.overlay').not('#modal-page').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
         $('.mn-right-it-1').show();
        $('.mn-right-it-2').hide();
        $('.mn-right-it-3').hide();
    }
});


// $('.btn-prc-js').on('click', function(event) {
//   event.preventDefault();
//   $('html').addClass('stop');
//   $('#modal-order').fadeIn();
// });
$('.btn-call-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-call').fadeIn();
});

$('.btn-call2-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-call2').fadeIn();
});
$('.btn-call3-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-call3').fadeIn();
});
$('.btn-call4-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-call4').fadeIn();
});

$('.btn-call5-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-call5').fadeIn();
});

$('.btn-photo-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-photo-cot').fadeIn();
});


$('.btn-politics-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#politics').fadeIn();
});




$('.feedback-slider__more').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('cl')){ 
    $(this).siblings('.feedback-slider__text').find('.feedback-slider__dots').hide();
    $(this).siblings('.feedback-slider__text').find('.feedback-slider__hover').fadeIn();
    $(this).find('div').text('Скрыть');
    $(this).addClass('cl'); 
  }else {
    $(this).siblings('.feedback-slider__text').find('.feedback-slider__dots').fadeIn();
    $(this).siblings('.feedback-slider__text').find('.feedback-slider__hover').hide();
    $(this).find('div').text('Еще');
    $(this).removeClass('cl');
    
  }
    
  
});



// $('.btn-politics-js').on('click', function(event) {
//   event.preventDefault();
//   $('html').addClass('stop');
//   $('#politics').fadeIn();
// });
// Получить консультацию


// var closeMod = false;
//    $(document).mouseleave(function(event) {
//        event = event || window.event;
//        if (event.clientY < 0 || event.clientY < 3) {
//            if (!closeMod) {
//                $('#modal-end').fadeIn();
//                $('html').addClass('stop');
//                closeMod = true;
//            }

//        }
//    });




function prcBtn(){
 $('.price-btn').on('click', function(event) {
  event.preventDefault();
  var title = $(this).parents('.price-item').find('.title-prm').text().trim();
  $('.titles-cbp1').text(title);
  $('.titles-cbp').val(title);
  // $('#dok-inp').val($(this).parents('.specials__text').find('.title-name').text().trim());
  $('html').addClass('stop');
  $('#modal-cbp').fadeIn();
}); 
}

prcBtn();


$('.order-u').on('click', function(event) {
  event.preventDefault();
  var title = $(this).parents('.d-pr__right-item').find('.title-imd').text().trim();
  $('.titles-cbp1').text(title);
  $('.titles-cbp').val(title);
  // $('#dok-inp').val($(this).parents('.specials__text').find('.title-name').text().trim());
  $('html').addClass('stop');
  $('#modal-cbp').fadeIn();
});



  d = new Date();
  monthA = 'января,февраля,марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',');
  d.setMonth(d.getMonth() + 1);
  $('.date-js').text( d.getDate() +'.' + d.getMonth() + '.' + d.getFullYear());


  

$('.btn-port-bl').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('show');
  if($(this).hasClass('show')){
    $(this).find('b').text('Скрыть');
    $('.portfolio__item').fadeIn();

    $('.portfolio__slider-top').slick('setPosition');
    $('.portfolio__slider-bot').slick('setPosition');

  }else{
    $(this).find('b').text('Показать еще');
    
        $('.portfolio__item').each(function(index, el) {
          
            if(index < 5){
              $(this).fadeIn();
            }else{
              $(this).hide();
            }
        });
    $('.portfolio__slider-top').slick('setPosition');
    $('.portfolio__slider-bot').slick('setPosition');
      var id = $(this).attr('href'), top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
  }
});





$(".nav a, .footer-nav a").on("click", function (event) {
  

  if($(this).attr('href') === '#not'){
    return false;
  }else{
    if($(this).parents(".nav__wrap").hasClass('active')){
      if($(window).width() < 900){
        $(".nav__wrap").removeClass("active");
        $('.overlay').fadeOut();
        $('html').removeClass('stop');
      }
      
    }
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  }

});


$(".btn-nav-calc").on("click", function (event) {
  
    $(".nav__wrap").removeClass("active");
    $('html').removeClass('stop');

    var id = $('#test-c').offset().top;
    $('body,html').animate({scrollTop: id}, 1000);

});


$('.link-scroll').on('click', function(event) {
  event.preventDefault();
  var id = $(this).attr('href'), top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});







  if($(window).width() < 567){
    // $(".pcsdfp").clone().removeClass('desc-v')
    // .appendTo(".mobprs-item");
    // $('.desc-v').remove();


     $(".sertificat-analysis").clone().removeClass('desc-v')
    .appendTo(".sals");
    $('.desc-v').remove();
  }







$(".btn-prices-js-a").on("click", function (event) {
    event.preventDefault();
    var id = $('#pforms').offset().top;
    $('body,html').animate({scrollTop: id}, 400);
  
});







$(".title, .title-lg").not('.title-first').each(anime);
$(".t-min, .t-ss, .tab__cont__info__item").not('.title-first').each(anime);
// $(".title-descr").not('.subtitle-first').each(anime);
function anime(anim){
  // var offsetTop = thisTitle.offset().top - $(window).height() - 10;
  var thisTitle = $(this);
  $(window).scroll(function(event) {
     var offsetTop = thisTitle.offset().top - $(window).height() - 40;
    if($(document).scrollTop() > offsetTop ){
      thisTitle.addClass('fade_in');
    }
  });
}






if($('body').find('.project__items').length > 0){
  $('.project__tab-item').on('click', function(event) {
    event.preventDefault();
    if(!$(this).hasClass('active')){
      $('.project__tab-item').removeClass('active');
      $(this).addClass('active');
      $('.project__items').hide().eq($(this).index()).fadeIn();
    }
  });
}



 $('.dir-sh').on('click', function(event) {
    event.preventDefault();

    if($(this).hasClass('open')){

      $(this).parents('.dir__advas-item-text').find('.text-dir-wrap').addClass('act');
      $(this).removeClass('open');
    }else{
      $(this).addClass('open');

      var heigtText = $(this).parents('.dir__advas-item-text').find('.text-dir').outerHeight();

       $(this).parents('.dir__advas-item-text').find('.text-dir-wrap').removeClass('act').removeAttr('style').css({
       height: heigtText,
     });


    }

  });


$(".flst1 a").on("click", function (event) {
  var id = $(this).attr('href'), top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 600);
});

$(".to_catalog").on("click", function (event) {
  event.preventDefault();
  var id = $('.tab').offset().top - 20;
  $('body,html').animate({scrollTop: id}, 600);
});





$('.date-next').on('click', function(event) {
  event.preventDefault();
  
  if($(this).parents('.mn__form-block').find('.input').val() !== ''){
    $('.mn-right-it-1').hide();
    $('.mn-right-it-2').fadeIn();
  }else{
    $(this).parents('.mn__form-block').find('.input').focus();
  }
  
});




var catSlider = $('.etap__slider');



catSlider.each(function(index, el) {
   $(this).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<button class="arrows slidePrev t2"><img src="assets/img/etap/arr-l.png" alt=""></button>',
	nextArrow: '<button class="arrows slideNext t2"><img src="assets/img/etap/arr-r.png" alt=""></button>',
    // autoplay:true,
    // autoplaySpeed: 5000,
    dots: true,
      responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        }
      },

    ]
    // fade: true
  });

   var len = $(this).slick('getSlick').slideCount;
   var numAll = len;

   $(this).parents('.etap__slider-wrap').find('.etap-all').text(numAll);

   $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
       var number = nextSlide + 1;

       $(this).parents('.etap__slider-wrap').find('.etap-cur').text(number);

   });
});






$('.price__tab-item').on('click', function(event) {
	event.preventDefault();
	if(!$(this).hasClass('active')){
		$('.price__tab-item').removeClass('active');
		$(this).addClass('active');

		$('.price__item').hide().eq($(this).index()).fadeIn();
		$('.price__img-item').hide().eq($(this).index()).fadeIn();

		var id = $('.price__tab').offset().top - 20;
		$('body,html').animate({scrollTop: id}, 600);

		$('.etap-js').hide().eq($(this).index()).fadeIn();
		$('.etap__slider').slick('setPosition');
	}
});


$('.faq__acr').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('active');
	$(this).find('.faq__acr-body').slideToggle();
});

$('.objects-block__item').each(function(index, el) {
  $(this).find('.objects-nav__img , .objects-block__img').attr('data-fancybox', 'p-'+ index);
  if(index >1){
    $(this).hide();
  }
});


$('.price__more').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('show')){
    $('.price__item').fadeIn();
    $(this).addClass('show').find('b').text('Скрыть');

  }else{
    $(this).removeClass('show').find('b').text('смотреть больше услуг');;
    $('.price__item').each(function(index, el) {
      if(index >7){
        $(this).hide();
      }
    });
  }
 
  // var id = $('.price__block').offset().top - 10;
  // $('body,html').animate({scrollTop: id}, 400);
});

});


if($('body').find('.seob__btn').length > 0){
  $('.seob__btn').on('click', function(event) {
    event.preventDefault();


    

    if($(this).hasClass('open')){
      $(this).css('transform', 'rotate(90deg)')
      $(this).parents('.container-min').find('.seob__text').addClass('act');
      $(this).removeClass('open');
    }else{
      $(this).addClass('open');
      $(this).css('transform', 'rotate(270deg)')
      var heigtText = $(this).parents('.container-min').find('.seob__text-wrap').outerHeight();

       $(this).parents('.container-min').find('.seob__text').removeClass('act').removeAttr('style').css({
       height: heigtText,
     });


    }

  });
}

$('.info__add').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('cl')){ 
    $(this).siblings().find('.info__dop-text').fadeIn();
    $(this).find('.info__add-text').text('Скрыть');
    $(this).addClass('cl'); 
  }else {
    $(this).siblings().find('.info__dop-text').hide();
    $(this).find('.info__add-text').text('Показать еще');
    $(this).removeClass('cl');
    
  }
    
  
});


// var cookiesTest2 = get_cookie ("test2");
//   if(cookiesTest2 !== '' && cookiesTest2 !== null){
//     $('#modal-gift').hide();
//   }else{
//      $('#modal-gift').fadeIn();
//      $('html').addClass('stop');
  
//   }




$('#portfolio-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<button class="arrows blag-arrow slideNext"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',
  prevArrow: '<button class="arrows blag-arrow slidePrev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',
  dots: false,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        autoplay: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        autoplay: false,
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
        autoplay: false,
      }
    },

  ]
  // fade: true
});

$('#feedback-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<button class="arrows blag-arrow slideNext"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',
  prevArrow: '<button class="arrows blag-arrow slidePrev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',
  dots: false,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        autoplay: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        autoplay: false,
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
        autoplay: false,
      }
    },

  ]
  // fade: true
});

$('#info-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button class="arrows blag-arrow slideNext"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',
  prevArrow: '<button class="arrows blag-arrow slidePrev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',
  dots: false,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        autoplay: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        autoplay: false,
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        autoplay: false,
      }
    },

  ]
  // fade: true
});

$('.ltab-item').on('click', function (event) {
  event.preventDefault();
  if (!$(this).hasClass('current-menu-item')) {
    $('.ltab-item').removeClass('current-menu-item');
    $(this).addClass('current-menu-item');
    $('.ltab-cont').hide().eq($(this).index()).fadeIn();
  }
});




// ktab__tab-item

$('.kinds__btn').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('show');
  if($(this).hasClass('show')){
    var id = $(this).offset().top - 40;
    $(this).addClass('show').find('.text').text('Скрыть');

    itemFilter (100 , 100);
    $('body,html').animate({scrollTop: id}, 100);
  }else{
   $(this).removeClass('show').find('.text').text('Открыть еще памятники');

    itemFilter (1 , 6);

    var id = $(".ktab").offset().top;
    $('body,html').animate({scrollTop: id}, 600);
  }
});


$('.ktab__tab-item').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('current-menu-item')){
    $('.ktab__tab-item').removeClass('current-menu-item');
    $(this).addClass('current-menu-item');
    t1 = $(this).text().trim();
   itemFilter (1, 6);
   $('.kinds__btn').removeClass('show').find('.text').text('Открыть еще памятники');
  }
});



var t1 = $('.ktab__tab-item.current-menu-item').text().trim();


var ns = 1;

function itemFilter(num , num2){

    dataTab (num2);

}
function dataTab (num2){
  ns = 1;
  $('.ktab__tab-cont').each(function(index, el) {
    var tlt2 = $(this).data('order');
      if( tlt2.toLowerCase().indexOf(t1.toLowerCase()) !== -1 ){
        
        if(ns > num2){
          $(this).hide();
        }else{
          $(this).fadeIn();
        }
        ++ns;
      }else{
        $(this).hide();
      }
    }
    
  );

}

$('.ktab__tab-cont').each(function(index, el) {
  if(index > 5){
    $(this).hide();
  }
});


$('.ktab__btn').on('click', function(event) {
  event.preventDefault();
  $('.overlay').hide();
  $('#modal-fixed').fadeIn();
  var tlt = $(this).parents('.ktab__tab-cont').find('.ktab__header').text().trim();
  $('.it3-js').val(tlt);
  // $('.t3-js').text(tlt);

  $('html').addClass('stop');
});