const { count } = require("console");
const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1812/input.txt")
  .toString()
  .trim()
  .split("\n");

const data = input.map(Number);

const number = data.shift();

// console.log(number);
// console.log(data);

let a = 0;

for (let i = 0; i < data.length; i++) {
  if (i % 2 === 0) {
    a = a + data[i];
  } else {
    a = a - data[i];
  }
}

a = a / 2;

let result = [a];

for (let i = 0; i < data.length - 1; i++) {
  result.push(data[i] - result[i]);
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i].toString());
}
