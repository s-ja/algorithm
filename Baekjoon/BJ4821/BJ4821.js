const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ4821/input.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

// console.log(input);

const obj = {};

for (let i = 0; i < input.length; i += 2) {
  const key = input[i].trim();
  if (input[i + 1]) {
    obj[key] = input[i + 1].split(","); // 값을 쉼표로 구분하여 배열로 변환
  }
}

console.log(obj);
