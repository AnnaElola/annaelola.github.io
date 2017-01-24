$(document).ready(function(){

  var availW = window.screen.availWidth;

  if (availW<750){
    $('#footer-middle').remove();
    $('#menyButton').show();
    $('line').remove();

    $('#menyList').css("display", "none");

    $('#menyButton').click(function(){
      $('#menyList').slideToggle();

      var wrapperHeight = $('.wrapper').css("margin-top");

      if(wrapperHeight=="96px"){
        $('.wrapper').css("margin-top", "20em");
      }
      else{
        $('.wrapper').css("margin-top", "6em");
      }
  });
};


});
