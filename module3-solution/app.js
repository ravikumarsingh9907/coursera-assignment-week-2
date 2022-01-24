const toggleBtn = document.querySelector(".toggle-bar");
const menuList = document.querySelector(".menu-list");

toggleBtn.addEventListener("click", function () {
  menuList.classList.toggle("show-list");
});
