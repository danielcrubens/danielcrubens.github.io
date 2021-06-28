 // function to open/close nav
 function toggleNav() {
    // if nav is open, close it
    if ($("nav").is(":visible")) {
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    // if nav is closed, open it
    else {
      $("button").addClass("menu");
      $("nav").fadeIn().css('display', 'flex');
    }
  }

  // when clicking + or ☰ button
  $("button").click(function () {
    // when clicking ☰ button, open nav
    if ($("header").hasClass("open")) {
      toggleNav();
    }
    // when clicking + button, open header
    else {
      $("header").addClass("open");
    }
  });

  // close nav
  $("#nav-close").click(function () {
    toggleNav();
  });

  // scroll to sections
  $("nav li").click(function () {
    // get index of clicked li and select according section
    var index = $(this).index();
    var target = $("main section").eq(index);

    toggleNav();

    $('html,body').delay(400).animate({
      scrollTop: target.offset().top
    }, 700);
  });

  var timelineSwiper = new Swiper ('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
      var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      319: {
        direction: 'horizontal',
      }
    }
  });