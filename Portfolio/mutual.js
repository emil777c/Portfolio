const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const checkbox = document.getElementById("checkbox");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
