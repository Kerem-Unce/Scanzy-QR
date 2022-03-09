// $(window).scroll(function(){
//     $('.navbar').toggleClass('scrolled', $(this).scrollTop()>50);
//     $('.navbar').addClass('scrolled-2', $(this).scrollTop()<50);

// });
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) { 
      $('.navbar').addClass('scrolled');
      $('.navbar').removeClass('scrolled-2');

  }
  else { 
    $('.navbar').removeClass('scrolled');
    $('.navbar').addClass('scrolled-2');
  }
});

$(".navbar-toggler").click(function(){
    $('.navbar').css('background', '#fff');
    $('.navbar').css('color', '#111111!important');
    $('.navbar').removeClass('scrolled');
    $('.navbar').removeClass('scrolled-2');


});

// GO TOP BUTTON
//Get the button
var mybutton = document.getElementById("GoTopbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
