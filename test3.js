$(document).ready(function(){
  var rand = Math.random()*10;
  if(rand<=4) {
    $('#slide-1').addClass('active');
    $('div#section0.section.fp-section.fp-table').css("background-color", "red");
  }
  else if(rand<=7) {
    $('#slide-2').addClass('active');
    $('div#section0.section.fp-section.fp-table').css("background-color", "blue");
  }
  else {
    $('#slide-3').addClass('active');
    $('div#section0.section.fp-section.fp-table').css("background-color", "green");
  }

  var a = 0;
  $('.nav-mobile, .menu-back').hide();

  $('.mobile-button').click(function(){
      $('.nav-mobile, .menu-back').show();
      $('.nav-mobile').animate({left: '0'}, 'fast')
      $('.menu-back').animate({opacity: '0.3'}, 'fast');
  });

  $('.menu-back').click(function(){
    $('.nav-mobile').animate({left: '-200px'}, 'fast')
    $('.menu-back').animate({opacity: '0'}, 'fast');
    $('.nav-mobile, .menu-back').hide(200);
    a = 0;
  });

  $('.nav li a').click(function(){
    $('.nav li a.active, .nav-mobile li a.active').removeClass('active');
    $(this).addClass('active');
  });
});
