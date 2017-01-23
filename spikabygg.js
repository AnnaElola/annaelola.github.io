$(document).ready(function(){

  var availW = $(window).width();
  console.log(availW);
  if (availW<1000){
    $('#footer-middle').remove();
  }



});
