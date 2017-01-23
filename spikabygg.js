$(document).ready(function(){

  var availW = window.screen.width;
  console.log(availW);
  if (availW<860){
    $('#footer-middle').remove();
  }



});
