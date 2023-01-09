//<div class="exes">X</div>
//<div class="circles">O</div>
const topCornerL = document.querySelector("#topCornerL");
const centerTop = document.querySelector("#centerTop");
const topCornerR = document.querySelector("#topCornerR");
const centerL = document.querySelector("#centerL");
const center = document.querySelector("#center");
const centerR = document.querySelector("#centerR");
const botCornerL = document.querySelector("#botCornerL");
const centerBot = document.querySelector("#centerBot");
const botCornerR = document.querySelector("#botCornerR");
let win = false;

if (win != true) {
  for (let i = 0; i < 1; i++) {
    topCornerL.addEventListener("click", function () {
      topCornerL.innerHTML = '<div class="exes">X</div>';
      i++;
      win = true;
    });
  }
  centerTop.addEventListener("click", function () {
    centerTop.innerHTML = '<div class="exes">X</div>';
    i++;
    win = true;
  });
}
