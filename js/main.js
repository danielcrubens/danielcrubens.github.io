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

  const grid = document.querySelector('.portfolio-item');
  const items = grid.querySelectorAll('.item');
  const portfolioMenuItems = document.querySelectorAll('.portfolio-menu ul li');

  const isotopeOptions = {
    itemSelector: '.item',
    layoutMode: 'fitRows'
  };

  const iso = new Isotope(grid, isotopeOptions);
  iso.arrange({ filter: '.api' });

  portfolioMenuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      portfolioMenuItems.forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');

      const selector = this.getAttribute('data-filter');
      iso.arrange({ filter: selector });

      return false;
    });
  });





