$(document).ready(function(){

  var availW = $(window).width();
  $('#footer-right p').text(availW);

  if (availW<860){
    $('#footer-middle').remove();
  }



});
