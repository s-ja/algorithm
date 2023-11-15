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

let candy = data[0];
console.log(candy);

for (let i = 1; i <= data.length - 2; i++) {
  console.log(Math.abs(data[i] - data[i + 1]));
  candy = candy + Math.abs(data[i] - data[i + 1]);
}

console.log(candy);
