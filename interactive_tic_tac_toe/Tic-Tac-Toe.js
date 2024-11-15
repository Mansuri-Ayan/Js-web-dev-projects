/** @format */

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#r-btn");
let heading = document.querySelector("#hh1");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

console.log(newbtn);
let msgcontainer = document.querySelector(".msg-container");

console.log(boxes);
let turnO = true;
const winnigPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("buttone was clicked");
    if (turnO) {
      box.innerHTML = "O";
      box.classList.add("o");
      heading.innerHTML = "Turn Of Player X";
      turnO = false;
    } else {
      box.innerHTML = "X";
      heading.innerHTML = "Turn Of Player O";
      box.classList.add("x");
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let checkWinner = (box) => {
  for (let patterns of winnigPatterns) {
    console.log(patterns[0], patterns[1], patterns[2]);
    console.log(
      boxes[patterns[0]].innerHTML,
      boxes[patterns[1]].innerHTML,
      boxes[patterns[2]].innerHTML
    );
    let pos1Value = boxes[patterns[0]].innerHTML;
    let pos2Value = boxes[patterns[1]].innerHTML;
    let pos3Value = boxes[patterns[2]].innerHTML;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value == pos2Value && pos2Value == pos3Value) {
        console.log("Winner", pos1Value);
        msg.innerHTML = `Congratulation Winner is ${pos1Value}`;
        showwiner();
      }
    }
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
    box.classList.remove("o", "x");
  }
};

const disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showwiner = () => {
  msgcontainer.classList.remove("hide");
  disabledBox();
};
() => {};
const resetGame = () => {
  turnO = true;
  msgcontainer.classList.add("hide");
  enableBox();
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
