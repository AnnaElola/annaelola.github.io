$(document).ready(function(){

  var availW = window.screen.availWidth;
  var pathname = window.location.pathname;

  if (availW<750){
    $('#footer-middle').remove();
    $('#menyButton').show();
    $('line').remove();
    $('#menyList').css("display", "none");

    if(pathname=="/index.html"){
      $('.hem').addClass('.active');
    }
    else if(pathname=="/projekt.html"){
      $('.projekt').addClass('.active');
    }
    else if(pathname=="/omforetaget.html"){
      $('.omforetaget').addClass('.active');
    }
    else if(pathname=="/kontakt.html"){
      $('.kontakt').addClass('.active');
    }
    
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
