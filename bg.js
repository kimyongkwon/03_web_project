const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImage() {
//   console.log("image load");
// }

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `https://kimyongkwon.github.io/03_web_project/images/${
    imgNumber + 1
  }.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);

  //   image.addEventListener("loadend", handleImage);
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const random = genRandom();
  paintImage(random);
}

init();
