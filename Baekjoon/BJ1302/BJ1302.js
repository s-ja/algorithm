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

// console.log(moreThan2);

const obj = {};

for (let i = 0; i < moreThan2.length; i++) {
  obj[moreThan2[i]] = 0;
  for (let j = 0; j < input.length; j++) {
    if (input[j] === moreThan2[i]) {
    }
  }
}

console.log(obj);
