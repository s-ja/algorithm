const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ7568/input.txt")
  .toString()
  .trim()
  .split("\n");

const number = Number(input.shift());
// console.log(number);

// let data = {};
// for (let i = 0; i < input.length; i++) {
//   data[i] = input[i].split(" ");
//   data[i][0] = Number(data[i][0]);
//   data[i][1] = Number(data[i][1]);
// }

let data = [];
for (let i = 0; i < number; i++) {
  data.push(input[i].split(" "));
  data[i][0] = Number(data[i][0]);
  data[i][1] = Number(data[i][1]);
}

// console.log(data);

let result = [];

for (let i = 0; i < number; i++) {
  let count = 1;
  for (let j = 0; j < number; j++) {
    if (data[i][0] < data[j][0] && data[i][1] < data[j][1]) {
      count++;
    }
  }
  result.push(count);
}

console.log(result.join(" "));