/* Navigation*/
const navButton = document.querySelector('#nav-button');
const navlinks = document.querySelector('#nav-bar');
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navlinks.classList.toggle('show')
  
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

});