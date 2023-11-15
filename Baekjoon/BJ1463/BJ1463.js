const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("Baekjoon/BJ1463/input.txt").toString().trim();

input = Number(input);

// console.log(typeof input, input);

let data = [];

function find1(input) {
  let count = 0;
  while (input !== 1) {
    if (input % 3 === 0) {
      input = input / 3;
      count++;
    } else if (input % 2 === 0) {
      input = input / 2;
      count++;
    } else {
      input = input - 1;
      count++;
    }
  }
  data.push(count);
}
function find2(input) {
  let count = 0;
  while (input !== 1) {
    if (input) {
      input = input - 1;
      count++;
    } else if (input % 3 === 0) {
      input = input / 3;
      count++;
    } else if (input % 2 === 0) {
      input = input / 2;
      count++;
    }
  }
  data.push(count);
}

find1(input);
find2(input);

console.log(data);
