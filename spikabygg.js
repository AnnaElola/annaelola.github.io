$(document).ready(function(){

  var availW = window.screen.availWidth;
  $('#footer-right p').text(availW);

  if (availW<1080){
    $('#footer-middle').remove();
  }



});
