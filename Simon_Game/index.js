/** @format */

let h2 = document.querySelector("h2");
// let btn = document.querySelectorAll(".btn");

let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let start = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("game is started");
    start = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerHTML = `level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  console.log(randIdx);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randbtn);
  gameSeq.push(randColor);
  console.log(randColor);
  console.log(gameSeq);

  btnFlash(randbtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}
function userFlash(btn) {
  btn.classList.add("user-flash");
  setTimeout(function () {
    btn.classList.remove("user-flash");
  }, 500);
}

function btnPress() {
  let btn = this;
  // console.log(this);
  userFlash(btn);
  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
console.log(allbtns);
for (let btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("same value");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! <b>Your score was ${level}</b>  Press any key to start`;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(() => {
      body.style.backgroundColor = "#f0f0f0";
    }, 250);
    reset();
  }
}

function reset() {
  gameSeq = [];
  userSeq = [];
  start = false;
  level = 0;
}

let startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", function () {
  if (start === false) {
    console.log("game is started");
    start = true;
    levelUp();
  }
});
