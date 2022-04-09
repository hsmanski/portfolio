const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");

const moreBtn = document.querySelector(".more-btn");
const btnTextToggle = document.querySelector(".more-btn span");
const sweetTreats = document.getElementById("sweet-treats");
const sunnyside = document.getElementById("sunnyside");
const easyBanking = document.getElementById("easy-banking");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

navList.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

moreBtn.addEventListener("click", () => {
  sweetTreats.classList.toggle("hide");
  sunnyside.classList.toggle("hide");
  easyBanking.classList.toggle("hide");

  if (sweetTreats.classList.contains("hide")) {
    btnTextToggle.innerHTML = "More";
  } else {
    btnTextToggle.innerHTML = "Less";
  }
});
