const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("Baekjoon/BJ1463/input.txt").toString().trim();

input = Number(input);

// console.log(typeof input, input);

let data = [];

// for (let i = 2; i < input + 1; i++) {
//   data[i] = data[i - 1] + 1;
//   if (i % 2 === 0) {
//     data[i] = Math.min(data[i], data[i / 2] + 1);
//   }
//   if (i % 3 === 0) {
//     data[i] = Math.min(data[i], data[i / 3] + 1);
//   }
// }

console.log(data);
