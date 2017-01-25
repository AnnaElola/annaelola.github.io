$(document).ready(function(){

  var availW = window.screen.availWidth;
  var pathname2 = $(location).attr('pathname');
  var pathname = window.location.pathname;
  var url      = window.location.href;
  console.log(pathname);
  console.log(pathname2);
  console.log(url);

  if (availW<750){
    $('#footer-middle').remove();
    $('#menyButton').show();
    $('line').remove();

    $('#menyList').css("display", "none");



    $('#menyButton').click(function(){
      $('#menyList').slideToggle();

      var wrapperHeight = $('.wrapper').css("margin-top");

      if(wrapperHeight=="160px"){
        $('.wrapper').css("margin-top", "33em");
      }
      else{
        $('.wrapper').css("margin-top", "10em");
      }
  });
};


});
