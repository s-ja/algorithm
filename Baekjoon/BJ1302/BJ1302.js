const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1302/input.txt")
  .toString()
  .trim()
  .split("\n");

let soldNumber = input.shift();

console.log(soldNumber);

console.log(input);

let moreThan2 = input.filter((item, index) => input.indexOf(item) !== index);

