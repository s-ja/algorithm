const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1018/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

// console.log(N, M);

// const board = [];

// for (let index = 0; index < input.length; index++) {
//   let row = input[index].split("");
//   board.push(row);
// }

let board = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "B", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

// 1. 8*8일때 칠해야 하는 정사각형의 최소 개수를 구하는 함수

let colorizeNumber = 0;

function colorize(board) {
  let clone = board;
  for (let i = 0; i < clone.length; i++) {
    for (let j = 0; j < clone[i].length; j++) {
      if (clone[i][j] !== clone[i][j + 1] && clone[i][j] === "W") {
        board[i].splice(j + 1, 1, "B");
        // colorizeNumber = colorizeNumber + 1;
      } else if (clone[i][j] !== clone[i][j + 1] && clone[i][j] === "B") {
        clone[i].splice(j + 1, 1, "W");
        // colorizeNumber = colorizeNumber + 1;
      } else {
        break;
      }
    }
    return clone;
  }
}

console.log(colorize(board), colorizeNumber);

// 1-1. 해당 블럭이 B일 경우에는 다음 블럭에 W를, W일 경우에는 B를 오게 해야 함.

// board.length = row
// board[i].length = column
