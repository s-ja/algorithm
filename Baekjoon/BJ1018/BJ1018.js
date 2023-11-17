const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1018/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

console.log(N, M);
// N = row
// M = column

let board = [];

for (let index = 0; index < input.length; index++) {
  let row = input[index].split("");
  board.push(row);
}

console.log(board);

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

for (let i = 0; i < board.length - 8; i++) {
  let chessBoard = [];
  let test = board.slice(i, i + 8);
  for (let j = 0; j < board[i].length - 8; j++) {
    chessBoard.push(test[])
  }
}