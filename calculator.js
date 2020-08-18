const buttons = document.querySelectorAll("button");
const number = document.querySelector(".number");

let result = 0;

let arr = [];

function push(value) {
  arr.push(value);
}

function pop() {
  return arr.pop();
}

function front() {
  return arr[arr.length - 1];
}

function empty() {
  if (arr.length == 0) {
    return true;
  }
  return false;
}

function getLength() {
  return arr.length;
}

function clear() {
  let size = arr.length;
  for (let i = 0; i < size; ++i) {
    arr.pop();
  }
  result = 0;
  number.innerText = "0";
}

function calculate() {
  let second = parseInt(pop());
  let oper = pop();
  let first = parseInt(pop());

  if (oper == "+") {
    result = first + second;
  } else if (oper == "-") {
    result = first - second;
  } else if (oper == "*") {
    result = first * second;
  } else if (oper == "/") {
    result = first / second;
  }

  push(String(result));
  number.innerText = result;
}

function handleButton(event) {
  const text = event.target.innerText;

  if (text == "c") {
    clear();
    return;
  }
  if (text == "=") {
    calculate();
    return;
  }

  if (text >= "0" && text <= "9") {
    if (front() == "0") return;

    if (
      front() != "+" &&
      front() != "-" &&
      front() != "*" &&
      front() != "/" &&
      empty() == false
    ) {
      pop();
      number.innerText += parseInt(text);
    } else {
      number.innerText = parseInt(text);
    }
    push(String(number.innerText));
  } else {
    if (getLength() >= 2) {
      calculate();
    }
    push(text);
  }
}

function init() {
  for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", handleButton);
  }
}

init();
