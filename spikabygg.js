$(document).ready(function(){

  var availW = window.screen.availWidth;
  var pathname = window.location.pathname;

  if (availW<750){
    $('#footer-middle').remove();
    $('#menyButton').show();
    $('line').remove();
    $('#menyList').css("display", "none");

    if(pathname=="/index.html"){
      $('.hem a').addClass('active');
    }
    else if(pathname=="/projekt.html"){
      $('.projekt a').addClass('active');
    }
    else if(pathname=="/omforetaget.html"){
      $('.omforetaget a').addClass('active');
    }
    else if(pathname=="/kontakt.html"){
      $('.kontakt a').addClass('active');
    }

    $('#menyButton').click(function(){
      $('#menyList').slideToggle();

      var wrapperHeight = $('.wrapper').css("margin-top");

      if(wrapperHeight=="48px"){
        $('.wrapper').css("margin-top", "13em");
      }
      else{
        $('.wrapper').css("margin-top", "3em");
      }
  });
};


});
