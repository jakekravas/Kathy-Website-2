$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // 800 = number of milliseconds it takes to scroll to specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800);
    }
  });
  $('.carousel').carousel({
    interval: 4000,
    keyboard: true,
    pause: 'hover',
    wrap: true
  });
});