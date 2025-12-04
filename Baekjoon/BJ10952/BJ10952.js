const fs = require("fs");
const input = fs.readFileSync("Baekjoon/BJ10952/input.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = [];

input.forEach(item => {
  const [A, B] = item.split(" ").map(Number);
  if (A === 0 && B === 0) {
    return;
  }else {
    result.push(A + B);
  }
});

console.log(result.join("\n"));