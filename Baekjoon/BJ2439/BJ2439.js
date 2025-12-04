const fs = require("fs");
const input = fs.readFileSync("Baekjoon/BJ2439/input.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  console.log(" ".repeat(N - i) + "*".repeat(i));
}