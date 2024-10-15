var navbar = document.getElementById("navbar");
var menu_btn = document.getElementById("menu_btn");
var menu_close_btn = document.getElementById("menu_close_btn");

menu_btn.addEventListener("click", () => {
  if (navbar.style.visibility === "visible") {
    navbar.style.opacity = 0;
    navbar.style.visibility = "hidden";
  } else {
    navbar.style.opacity = 1;
    navbar.style.visibility = "visible";
  }
});

// Optional: If you want to close the navbar using the close button
menu_close_btn.addEventListener("click", () => {
  navbar.style.opacity = 0;
  navbar.style.visibility = "hidden";
});

var swiper = new Swiper(".cakesSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500, // Corrected from display to delay
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    644: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    764: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper2 = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500, // Corrected from display to delay
    disableOnInteraction: false,
  },
  loop: true,
});
