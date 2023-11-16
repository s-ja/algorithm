const fs = require("fs");
const input = require("fs")
  .readFileSync("Baekjoon/BJ1388/input.txt")
  .toString()
  .replace(/\r/g, "") // Windows 환경의 줄바꿈 문자 제거
  .trim()
  .split("\n");

let test = input.shift();

let [a, b] = test.split(" ");

a = Number(a);
b = Number(b);

// console.log(a, b);
// console.log(input);

let data = [];

for (let i = 0; i < input.length; i++) {
  data.push(input[i].split(""));
}

data.push(0);
console.log(data);

let count = 0;

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] === "|" || data[i][j] !== data[i][j + 1]) {
      count++;
    }
    // if (!data[i + 1]) {
    //   console.log("break");
    //   break;
    // }
    // if (data[i][j] === "|" && data[i][j] === data[i + 1][j]) {
    //   count = count - 1;
  }
  for (let k = 0; k < data[i].length; k++) {
    if (data[i][k] === "|" && data[i][k] === data[i + 1][k]) {
      count = count - 1;
    }
  }
}
console.log(count);

console.log(data[0].join("").split("|"));
