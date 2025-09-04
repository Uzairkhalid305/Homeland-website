// Property Data
const propertiesData = [
  {
    tag: "FOR RENT",
    address: "871 CRENSHAW BLVD",
    price: "$2,250,500",
    image: "./assets/hero_bg_2.jpg.webp",
    color: "#8bc34a"
  },
  {
    tag: "FOR SALE",
    address: "420 SUNSET AVE",
    price: "$1,850,000",
    image: "./assets/hero_bg_1.jpg.webp",
    color: "#eb0f0fff"
  }
];

let current = 0;

const hero = document.getElementById("hero");
const tag = document.getElementById("tag");
const address = document.getElementById("address");
const price = document.getElementById("price");

function showSlide(index) {
  const property = propertiesData[index];
  hero.style.background = `url('${property.image}') no-repeat center center/cover`;
  tag.innerText = property.tag;
  tag.style.background = property.color;
  address.innerText = property.address;
  price.innerText = property.price;
  price.style.color = property.color;
}

function nextSlide() {
  current = (current + 1) % propertiesData.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + propertiesData.length) % propertiesData.length;
  showSlide(current);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds 
showSlide(current);

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
