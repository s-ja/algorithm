const { count } = require("console");
const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1812/input.txt")
  .toString()
  .trim()
  .split("\n");

const data = input.map(Number);

const number = data.shift();

console.log(number);
console.log(data);

// data.sort((a, b) => return (a - b))

data.sort(function (a, b) {
  return b - a;
});

console.log(data);
