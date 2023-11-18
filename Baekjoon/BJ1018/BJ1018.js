const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1018/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

// console.log(N, M);
// N = row
// M = column

let board = [];

for (let index = 0; index < input.length; index++) {
  let row = input[index].split("");
  board.push(row);
}

// console.log(board);

// board = [
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B"],
//   ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B"],
// ];

// 주어진 board 에서 나올 수 있는 8*8 체스판의 모든 경우를 구한다.

// 각 체스판 경우들에서 칠해야 하는 횟수를 구한다.

// 칠해야 하는 가장 작은 횟수를 반환한다.

let data = [];

let minPaint = Infinity;

for (let i = 0; i <= board.length - 8; i++) {
  for (let j = 0; j <= board[i].length - 8; j++) {
    minPaint = Math.min(
      minPaint,
      countPaints(board, i, j, "W"),
      countPaints(board, i, j, "B")
    );
  }
}
console.log(minPaint);

function countPaints(board, x, y, color) {
  let paintCount = 0;
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== color) {
        paintCount++;
      }
      color = color === "W" ? "B" : "W";
    }
    color = color === "W" ? "B" : "W";
  }
  return paintCount;
}
