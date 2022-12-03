const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navItems = $$(".nav__item");
const slip = $(".slip");

requestIdleCallback(() => {
  slip.style.left = $(".nav__item.active").offsetLeft + "px";
  slip.style.height = $(".nav__item.active").offsetHeight + "px";
  slip.style.width = $(".nav__item.active").offsetWidth + "px";
});

// Navbar animation on mouseover
navItems.forEach((navItem) => {
  navItem.onmouseover = function () {
    $(".nav__item.active").classList.remove("active");
    this.classList.add("active");
    slip.style.left = this.offsetLeft + "px";
    slip.style.height = this.offsetHeight + "px";
    slip.style.width = this.offsetWidth + "px";
  };
});
// Navbar animation on mouseout
$("header").addEventListener("mouseover", () => {
  slip.style.opacity = "1";
});
$("header").addEventListener("mouseout", () => {
  slip.style.opacity = "0";
});

// Responsive menu
const menu = $(".menu-responsive");
const open = $(".menu-open");
console.log(open);
const closeMenuBtn = $(".subnav__close");
const subnavOverlay = $(".subnav__overlay");
// Open menu
open.onclick = function () {
  menu.classList.add("active");
};

subnavOverlay.onclick = function () {
  menu.classList.remove("active");
};

// Close menu
closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Preloader

const title = $$(".model__info h2");
const subTitle = $$(".model__info p");
const orderBtn = $(".order-btn");
const inventoryBtn = $(".inventory-btn");

window.addEventListener("load", () => {
  title[0].style.animation = "slideUp 1s ease-in-out forwards";
  Object.assign(subTitle[0].style, {
    animation: "slideUp 1s ease-in-out forwards",
    animationDelay: "0.5s",
  });
  orderBtn.style.animation = "slideRight 1.5s ease-in-out forwards";
  inventoryBtn.style.animation = "slideLeft 1.5s ease-in-out forwards";
});

//
const scrollIcon = $(".page__scroll");
$(".tesla").addEventListener("scroll", () => {
  if ($(".tesla").scrollTop > 30) {
    scrollIcon.style.display = "none";
  } else {
    scrollIcon.style.display = "block";
  }
});
