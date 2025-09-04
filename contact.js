

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

const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");
const boxes = document.querySelector(".boxes");

gridBtn.addEventListener("click", () => {
  boxes.classList.add("grid-view");
  boxes.classList.remove("list-view");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
  // Hide extra paragraph in grid view
  document.querySelectorAll('.list-extra').forEach(p => {
    p.style.display = "none";
  });
});

listBtn.addEventListener("click", () => {
  boxes.classList.add("list-view");
  boxes.classList.remove("grid-view");
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
  // Show extra paragraph in list view
  document.querySelectorAll('.list-extra').forEach(p => {
    p.style.display = "block";
  });
});
