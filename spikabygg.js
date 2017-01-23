$(document).ready(function(){

  var availW = $(window).width();
  console.log(availW);
  if (availW<860){
    $('#footer-middle').remove();
  }



});
