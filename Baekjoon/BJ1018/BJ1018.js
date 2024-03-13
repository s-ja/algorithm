const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1018/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const board = [];

for (elem of input) {
  elem = elem.replace(/\r/g, "");
  board.push(elem.split(""));
}

// console.log(N,M)
// console.log(board)

const test = [];

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let boardCopy = [...board];
    test.push(boardCopy.splice(j, 8));
  }
}

console.log(test);
// [
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
// ];
