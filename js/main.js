var yourNavigation = (".nav");
var yourHeader = ('.header').height();

function (window).scroll(function()
{
  if ($(this).scrollTop() > yourHeader) {
    yourNavigation.addClass("sticky");
  } 
else 
{\
    yourNavigation.removeClass("sticky");
  }
});




