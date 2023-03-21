const menuIcon = document.querySelector(".header__burger-menu");
const menuNav = document.querySelector(".header__top-nav");
const menuList = document.querySelector(".nav__list");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  menuNav.classList.toggle("active");
  menuList.classList.toggle("active");
});
document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    menuNav.classList.remove("active");
    menuList.classList.remove("active");
  })
);

$slickSlide = false;
function mySlider() {
  if ($(window).width() < 1119) {
    if (!$slickSlide) {
      $(".slider").slick({
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: true,
        mobileFirst: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
        responsive: [
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 319,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      $slickSlide = true;
    }
  } else if ($(window).width() > 1120) {
    if ($slickSlide) {
      $(".slider").slick("unslick");
      $slickSlide = false;
    }
  }
}
$(document).ready(function () {
  mySlider();
});
$(window).on("resize", function () {
  mySlider();
});
