"use strict";
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.getElementById("menu_list");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("list");
});
