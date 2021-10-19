const navMenu = document.querySelector(".nav__menu");
const showMenu = document.querySelector(".nav__icons");
const overlay = document.querySelector("#overlay");
const header = document.querySelector(".header");

showMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  showMenu.classList.toggle("open");
  overlay.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    header.style.background = "#fff";
  } else {
    header.style.background = "transparent";
  }
});
