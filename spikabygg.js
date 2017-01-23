$(document).ready(function(){

  var availW = window.screen.availWidth;
  console.log(availW);
  if (availW<860){
    $('#footer-middle').remove();
  }



});
