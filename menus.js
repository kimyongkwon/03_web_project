const menus = document.querySelector(".menus");
const arrow = document.querySelector(".menus__box__arrow");
const menuBox = document.querySelector(".menus__box");

const calculatorButton = document.querySelector(".menus__box__calculator");
const calculatorBox = document.querySelector(".calculator__box");

function menuBoxOpen() {
  menuBox.classList.add("menus__box__appear");
}

function menuBoxClose() {
  menuBox.classList.remove("menus__box__appear");
  menuBox.classList.add("menus__box__disppear");

  if (calculatorBox.classList.contains("calculator__box__appear")) {
    calculatorBox.classList.remove("calculator__box__appear");
    calculatorBox.classList.add("calculator__box__disappear");
  }
}

function menuCalculator() {
  if (calculatorBox.classList.contains("calculator__box__disappear")) {
    calculatorBox.classList.remove("calculator__box__disappear");
    calculatorBox.classList.add("calculator__box__appear");
  } else if (calculatorBox.classList.contains("calculator__box__appear")) {
    calculatorBox.classList.remove("calculator__box__appear");
    calculatorBox.classList.add("calculator__box__disappear");
  }
}

function init() {
  menus.addEventListener("click", menuBoxOpen);
  arrow.addEventListener("click", menuBoxClose);
  calculatorButton.addEventListener("click", menuCalculator);
}

init();
