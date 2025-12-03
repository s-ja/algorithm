const fs = require("fs");
const input = fs.readFileSync("Baekjoon/BJ15552/input.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const T = Number(input[0]);

const result = [];

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  result.push(A + B);
}

console.log(result.join("\n"));