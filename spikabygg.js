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

      if(wrapperHeight=="160px"){
        $('.wrapper').css("margin-top", "30em");
      }
      else{
        $('.wrapper').css("margin-top", "10em");
      }
  });
};


});
