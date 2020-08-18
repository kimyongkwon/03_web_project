const menus = document.querySelector(".menus");
const arrow = document.querySelector(".menus__box__arrow");
const menuBox = document.querySelector(".menus__box");

function menuBoxOpen() {
  menuBox.classList.add("menus__box__appear");
}

function menuBoxClose() {
  menuBox.classList.remove("menus__box__appear");
  menuBox.classList.add("menus__box__disppear");
}

function init() {
  menus.addEventListener("click", menuBoxOpen);
  arrow.addEventListener("click", menuBoxClose);
}

init();
