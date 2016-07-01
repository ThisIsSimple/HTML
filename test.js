$(document).ready(function(){
  var a = 0;
  $('.nav-mobile, .menu-back').hide();

  $('.mobile-button').click(function(){
    if(a===0)
    {
      $('.nav-mobile').show(1000);
      $('.menu-back').show(1000);
      a = 1;
    }
    else if(a===1)
    {
      $('.nav-mobile').hide(1000);
      $('menu-back').hide(1000);
      a = 0;
    }
  });
  $('.menu-back').click(function(){
    $('.nav-mobile').hide();
    $(this).hide();
    a = 0;
  });

  $('.nav li a').click(function(){
    $('.nav li a.active').removeClass('active');
    $(this).addClass('active');
  });
});
