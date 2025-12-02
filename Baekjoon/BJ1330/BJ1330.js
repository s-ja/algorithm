const fs = require("fs");
// const input = fs.readFileSync("Baekjoon/BJ1330/input.txt").toString().trim().split(" ");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [a, b] = input.map(Number);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}