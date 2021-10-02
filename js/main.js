// função abre e fecha buton nav
$(document).ready(function () {
  function toggleNav() {
    if ($("nav").is(":visible")) {
      $("nav").fadeOut();
      $("button").removeClass("menu");
    } else {
      $("button").addClass("menu");
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
      500
    );
  });
});
  //carousel swiper
  const sliderThumbs = new Swiper(".slider-thumbs .swiper-container", {
    paginationClickable: true,
    autoplay: true,
    speed: 2350,
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
    },

    freeMode: true,
    breakpoints: {
      0: {
        direction: "horizontal",
      },
      320: {
        direction: "vertical",
      },
    },
  });
  const sliderImages = new Swiper(".slider-images .swiper-container", {
    paginationClickable: true,
    autoplay: true,
    speed: 2350,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 32,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
    },

    grabCursor: true,
    thumbs: {
      swiper: sliderThumbs,
    },
    breakpoints: {
      0: {
        direction: "horizontal",
      },
      320: {
        direction: "vertical",
      },
    },
  });

