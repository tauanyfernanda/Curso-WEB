const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// MOSTRAR SIDEBAR
menuBtn.addEventListener("click", () => {
  sideMenu.display = "block";
});
// FECHAR SIDEBAR
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//Mudar Tema
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themetoggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themetoggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
