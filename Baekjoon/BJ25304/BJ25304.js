const fs = require("fs");
const input = fs.readFileSync("Baekjoon/BJ25304/input.txt").toString().trim().split("\n");

const X = Number(input[0]);
const N = Number(input[1]);

let sum = 0;

for (let i = 2; i < N + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  sum += a * b;
}

console.log(sum === X ? "Yes" : "No");