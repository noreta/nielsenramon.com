//= require_self

// Smooth scrolling.

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Fade in animation

window.sr = ScrollReveal();
sr.reveal('.fade-in', {
  origin: 'top',
  delay: 200,
  duration: 700,
  distance: '5px',
  reset: true,
  easing: 'ease-out',
  scale: 1
}, 300);
