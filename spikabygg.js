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

      if(wrapperHeight=="80px"){
        $('.wrapper').css("margin-top", "12.5em");
      }
      else{
        $('.wrapper').css("margin-top", "5em");
      }
  });
};


});
