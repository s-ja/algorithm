const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ20125/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());

let board = [];

for (elem of input) {
  board.push(elem.split(""));
}

let headRow = 0;
let headCol = 0;

for (let i = 0; i < n; i++) {
  let kill = false;
  for (let j = 0; j < n; j++) {
    if (board[i][j] === "*") {
      headRow = i;
      headCol = j;
      kill = true;
      break;
    }
  }
  if (kill === true) {
    break;
  }
}

const heartRow = headRow + 1;
const heartCol = headCol;

let leftArmLength = 0;

for (let i = 0; i < heartCol; i++) {
  if (board[heartRow][i] === "*") {
    leftArmLength++;
  }
}

let rightArmLength = 0;

for (let i = heartCol + 1; i < n; i++) {
  if (board[heartRow][i] === "*") {
    rightArmLength++;
  }
}

let waistLength = 0;
let legStart = 0;

for (let i = heartRow + 1; i < n; i++) {
  if (board[i][heartCol] === "*") {
    waistLength++;
    legStart = i;
  }
}

let leftlegLength = 0;

for (let i = legStart; i < n; i++) {
  if (board[i][heartCol - 1] === "*") {
    leftlegLength++;
  }
}

let rightlegLength = 0;

for (let i = legStart; i < n; i++) {
  if (board[i][heartCol + 1] === "*") {
    rightlegLength++;
  }
}

console.log(heartRow + 1, heartCol + 1);
console.log(
  leftArmLength,
  rightArmLength,
  waistLength,
  leftlegLength,
  rightlegLength
);

// 10
// _______*__
// __********
// _______*__
// _______*__
// _______*__
// ______*_*_
// ______*_*_
// ______*___
// __________
// __________
