const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
}

// Loader Code
window.addEventListener("load", function () {
  const loader = document.getElementById("nexroLoader");
  if (loader) {
    loader.style.display = "none";
  }
});