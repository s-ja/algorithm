const fs = require("fs");
const input = fs.readFileSync("Baekjoon/BJ1541/input.txt").toString().trim();
// const input = fs.readFileSync("/dev/stdin").toString().trim();

const test = "000009";

// console.log(input, typeof input, input.length); // 10+20+30+40-00009-00009 string 23
// console.log(Number(test), typeof Number(test)); // 9 number

// 10+20+30+40+50-60-70+80+90-100
// const data = "10+20+30+40+50-60-70+80+90-100".split(/([+-])/);
const data = input.split(/([+-])/);

// console.log(data, data.length);

for (let i = 0; i < data.length; i++) {
  for (let j = 1; j < data.length - 1; j += 2) {}
}
