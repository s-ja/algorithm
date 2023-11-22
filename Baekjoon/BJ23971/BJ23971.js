const { count } = require("console");
const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ23971/input.txt")
  .toString()
  .trim()
  .split(" ");

// console.log(input);

// input = ["5", "4", "1", "1"];

const H = Number(input[0]);
const W = Number(input[1]);
const N = Number(input[2]);
const M = Number(input[3]);

// console.log(H, W, N, M);

// let col = new Array(W).fill(0);
// let row = new Array(H).fill(0);

// console.log(col, row);

// let countPlace = 0;

// for (let i = 0; i < H; i = i + N + 1) {
//   for (let j = 0; j < W; j = j + M + 1) {
//     countPlace++;
//   }
// }

let rowCount = Math.floor((H + N) / (N + 1));
let colCount = Math.floor((W + M) / (M + 1));

let countPlace = rowCount * colCount;

console.log(countPlace);
