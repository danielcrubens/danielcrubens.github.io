// função abre e fecha buton nav
$(document).ready(function () {
  function toggleNav() {
    if ($("nav").is(":visible")) {
      $("nav").fadeOut();
      $("button").removeClass("menuu");
    } else {
      $("button").addClass("menuu");
      $("nav").fadeIn().css("display", "flex");
    }
  }
  // quando clicar  ☰
  $("button").click(function () {
    if ($("header").hasClass("open")) {
      toggleNav();
    } else {
      $("header").addClass("open");
    }
  });

  // fechar nav
  $("#nav-close").click(function () {
    toggleNav();
  });

  // scroll sections

  $("nav li").click(function () {
    // get index of clicked li and select according section
    var index = $(this).index();
    var target = $("main section ").eq(index);

    toggleNav();

    $("html,body").delay(300).animate(
      {
        scrollTop: target.offset().top,
      },
      200
    );
  });
});

$(document).ready(function(){
  $('.carousel').slick({
    infinite:false,
    slidesToScroll: 3,
  slidesToShow: 3,
  dots:false,
  autoplay: false,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:false,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        autoplay: true,
        arrows:false,
        adaptiveHeight: true,
        autoplaySpeed: 2700,
      },
    },
  ],
  });
});

