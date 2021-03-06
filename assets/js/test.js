var number = 0;
var maxNumber = $(".test-item").length;
var $element = $(".test-item").find("input, select, textarea");
var btnPrev = $(".quiz__prev");
var btnNext = $('.quiz__next');
var isValid;
var dataBlock;
var activeSlede = [];

for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}


$element.on('change input', function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);

});
$('.num-all').text(maxNumber);
function btnActive(isValid) {
  if(number === 0){
    btnPrev.prop('disabled', 'false');
    btnPrev.hide();
    btnNext.prop('disabled', isValid);
    $('.btn-lbs').hide();
  }else{
    btnPrev.fadeIn();
    btnPrev.prop('disabled', false);
    $('.btn-lbs').hide();
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    }else{
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }
    
  }

}


var lbs = false;
$('.btn-lbs').on('click', function(event) {
  event.preventDefault();
  $(this).addClass('act');
  
  if(!lbs){
    setTimeout(function(){
      $('.btn-lbs').removeClass('act');
      lbs = false;
    }, 3000);
    lbs = true;
  }

});

// sidebar

var $barLevel = 100 / (maxNumber + 1);
  var $barWidth = $barLevel;
  function progress(num){
    $(".progress-bar__line").css({"width": $barWidth + '%'});
    // $('.pc').text(Math.floor($barWidth) + '%');
  }
  progress(0);



// btn

function btnClick() {

  // btnPrev.on('click', function(event) {
  //   event.preventDefault();
  //   --number;

  //   $('.test-item').hide();
  //   $('.test-item').eq(number).fadeIn(1000);
  //   $(".progress__item").eq(number+1).removeClass('active');
  //   $(".progress__item").eq(number).addClass('active');
  //   btnActive(!isValid);


  //   animateTop ();
  // });

  btnNext.on('click', function(event) {
    event.preventDefault();
    activeSlede[number] = true;
    ++number;
    
    btnPrev.show();
    btnActive(!isValid);

    
    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    }else{
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }
    $barWidth += $barLevel;
     $(".test-item").hide();
      $(".test-item").eq(number).fadeIn(600);

    if(number === maxNumber - 1){
      $(".line-text").html('<b>Остался последний шаг</b>');
      $('.test__btns').hide();
      // $('.progress').hide();
    }
    
    $barWidth += $barLevel;
    progress(number);

    animateTop ();
    // $('.test-left-img').attr({'src': 'assets/img/test/a-'+ (number + 1) +'.png'});
    $(".num-current").text(number + 1);
    

  });


}
btnClick();

function animateTop (eq){
  var elem = $('.test-scroll-js');
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}


$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};





 var nForm = false;
  $(function(){
    'use strict';
    var action = './assets/mailer/send.php';
    $('form').on('submit', function(e){
      e.preventDefault();
      var formThis = $(this);
      var fd = new FormData( this );

      
      formThis.find('.btn').attr({
        'disabled': 'true'
      });

      if(formThis.find('input[name="formname"]').val() === "price" ){
        var link = document.createElement('a');
        link.setAttribute('href', 'docs/price.pdf');
        link.setAttribute('target', "_blank");
        link.setAttribute('download','');

        if(navigator.userAgent.indexOf('Mac') > 0){
          window.location = 'docs/price.pdf';
        }else{
          simulate( link, "click");
        }
        $('html').addClass('stop');
        $(".overlay").fadeOut();
        $("#modal-thank2").fadeIn();
        formThis.find('.btn').removeAttr('disabled');

      }else if(formThis.find('input[name="formname"]').val() === "call" ){
        $('html').addClass('stop');
        $(".overlay").fadeOut();
        $("#modal-thank").fadeIn();
      }else if(formThis.find('input[name="formname"]').val() === "test" ){            
        formThis.find('input').attr({
          'disabled': 'true',
        });
        formThis.find('button').attr({
          'disabled': 'true',
        });

        $('.test-cont').hide();
        $('.test-thank').fadeIn();
        
      }else{
        $(".overlay").fadeOut();
        $('html').addClass('stop');
        $("#modal-thank").fadeIn();

      }
      $.ajax({
        url: action,
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        success: function(msg){
        

          formThis.find('.btn').removeAttr('disabled');
          $('form').trigger('reset');

        }

      });
    });
 });




  // ---------------------

  function simulate(element, eventName)
  {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
      if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
      throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
      oEvent = document.createEvent(eventType);
      if (eventType == 'HTMLEvents')
      {
        oEvent.initEvent(eventName, options.bubbles, options.cancelable);
      }
      else
      {
        oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
          options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
          options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
      }
      element.dispatchEvent(oEvent);
    }
    else
    {
      options.clientX = options.pointerX;
      options.clientY = options.pointerY;
      var evt = document.createEventObject();
      oEvent = extend(evt, options);
      element.fireEvent('on' + eventName, oEvent);
    }
    return element;
  }

  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
  }
  var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
  }

$('.link-conf').on('click', function(event) {
  event.preventDefault();

  $('html').addClass('stop');
  $('#politics').fadeIn();
});

$('.close').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('close-video')){
    $('.modal-video-body iframe').remove();
  }else if($(this).hasClass('close-nav')){
    $(".nav-wrap-header").fadeOut();
  }
  $(".overlay").fadeOut();
  $("html").removeClass('stop');
});

 $('.overlay').not('#modal-page').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
    }
});


  d = new Date();
  
  d.setDate(d.getDate() + 2);
  d.setMonth(d.getMonth() + 1);

  var day = d.getDate();
  var month = d.getMonth();
  if(d.getDate() < 10){
    day = '0' + day;
  }

  if(month < 10){
    month = '0' + month;
  }

  $('.date-js').text(day +'/' + month);

  $("input[name='qw6']").on('change, input', function() {

    if($(this).hasClass('ph')){
      $('.inp-enp-ph').attr('placeholder', 'Ваш телефон');
      $('.eml').hide();
    }else if($(this).hasClass('vb')){
      $('.inp-enp-ph').attr('placeholder', 'Ваш телефон в Viber');
      $('.eml').hide();
    }else if($(this).hasClass('ws')){
      $('.inp-enp-ph').attr('placeholder', 'Ваш телефон в WhatsApp');
      $('.eml').hide();
    }else if($(this).hasClass('mas')){
      $('.inp-enp-ph').attr('placeholder', 'Ваш телефон ');
      $('.eml').fadeIn();
    }
  
  });



