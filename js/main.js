document.addEventListener("DOMContentLoaded", () => {
  function toggleNav() {
    const nav = document.querySelector("nav");
    const button = document.querySelector("button");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      button.classList.remove("menu");
    } else {
      nav.style.display = "flex";
      button.classList.add("menu");
    }
  }

  document.querySelector("button").addEventListener("click", () => {
    const header = document.querySelector("header");
    if (header.classList.contains("open")) {
      toggleNav();
    } else {
      header.classList.add("open");
    }
  });

  document.querySelector("#nav-close").addEventListener("click", toggleNav);

  const navLinks = document.querySelectorAll("nav li");
  navLinks.forEach(function (link) {
    link.addEventListener("click", () => {
      toggleNav();
      const index = Array.from(navLinks).indexOf(link);
      const target = document.querySelectorAll("main section")[index];
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

$(document).ready(function () {
  $('.carousel').slick({
    infinite: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    dots: false,
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
          dots: false,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          arrows: false,
          adaptiveHeight: true,
          autoplaySpeed: 2700,
        },
      },
    ],
  });
});

