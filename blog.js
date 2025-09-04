// for a navbar responsiveness
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Optional: toggle submenu in mobile
document.querySelectorAll("#nav-menu li a").forEach(link => {
  link.addEventListener("click", e => {
    let parent = link.parentElement;
    if (parent.querySelector("ul")) {
      e.preventDefault();
      parent.classList.toggle("open");
    }
  });
});
