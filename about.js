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

// FAQ accordion toggle
document.querySelectorAll(".faq-answer").forEach((answer, idx) => {
  if (idx === 0) {
    answer.style.display = "block"; // Show only the first answer
    answer.previousElementSibling.classList.add("active");
  } else {
    answer.style.display = "none";
    answer.previousElementSibling.classList.remove("active");
  }
});

document.querySelectorAll(".faq-question").forEach((button, idx) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".faq-answer").forEach((answer, aIdx) => {
      if (aIdx === idx) {
        // Toggle the clicked one
        const isVisible = answer.style.display === "block";
        answer.style.display = isVisible ? "none" : "block";
        button.classList.toggle("active", !isVisible);
      } else {
        // Hide all others
        answer.style.display = "none";
        answer.previousElementSibling.classList.remove("active");
      }
    });
  });
});

// ...existing blog toggle code...