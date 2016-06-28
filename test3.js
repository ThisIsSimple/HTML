$(document).ready(function(){
  var a = Math.floor((Math.random() * 10) + 1);
  if(a<=4) {
    $('#slide-1').addClass('active');
  }
  else if(a<=7) {
    $('#slide-2').addClass('active');
  }
  else $('#slide-3').addClass('active');
});
