const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1244/input.txt")
  //   .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(input);
