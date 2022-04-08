const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

navList.addEventListener("click", () => {
  navbar.classList.toggle("change");
});