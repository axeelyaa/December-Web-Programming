// Opacity when loads
const page = document.getElementById("page");
const title = document.getElementById("title");

function pageOnLoad() {
  document.body.style.opacity = "1";
}

// Hamburger

const hamburger = document.querySelector(".header__nav__hamburger");
const navMenu = document.querySelector(".header__nav__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".header__nav__list li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
