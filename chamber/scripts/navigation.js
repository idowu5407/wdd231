// Dynamic year and last modified
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger toggle menu
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");

  // Switch between ☰ and ✖
  if (nav.classList.contains("show")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});


 