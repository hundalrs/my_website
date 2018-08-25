/*==================================================
                  OBJECTIVES
===================================================*/
$(function() {
  // show animations on scroll
  new WOW().init();
});

/*==================================================
                  NAVIGATION
====================================================*/
// Showing and Hiding Navigation Bar

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      //hide nav
      $("nav").removeClass("raman-top-nav");
    } else {
      //show nav
      $("nav").addClass("raman-top-nav");
    }
  });
});

// Smooth Scroll
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    // get/return id like #about_me
    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top
      },
      1250,
      "easeInOutExpo"
    );
  });
});

// Close mobile menu on click
$(function() {
  $(".navbar-collapse ul li a").on("click touch", function() {
    $(".navbar-toggle").click();
  });
});
