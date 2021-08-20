
// função abre e fecha buton nav
function toggleNav() {
  if ($("nav").is(":visible")) {
    $("nav").fadeOut();
    $("button").removeClass("menu");
  }
  else {
    $("button").addClass("menu");
    $("nav").fadeIn().css("display", "flex");
  }
}
// quando clicar  ☰ ou X button
$("button").click(function () {
  
  if ($("header").hasClass("open")) {
    toggleNav();
  }
  else {
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
  var target = $("main section").eq(index);

  toggleNav();

  $("html,body").delay(300).animate(
    {
      scrollTop: target.offset().top,
    },
    500
  );
});

// função carousel swiper
var timelineSwiper = new Swiper(".timeline .swiper-container", {
  direction: "vertical",
  loop: false,
  speed: 1600,
  pagination: ".swiper-pagination",
  paginationBulletRender: function (swiper, index, className) {
    var year = document
      .querySelectorAll(".swiper-slide")
      [index].getAttribute("data-year");
    return '<span class="' + className + '">' + year + "</span>";
  },
  paginationClickable: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    768: {
      direction: "horizontal",
    },
  },
});

