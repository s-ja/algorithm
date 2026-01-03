const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ1789/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let S = Number(input.shift());
// const numbers = [];
let count = 0;
for (let i = 1; i <= S; i++) {
  if (S >= i) {
    S = S - i;
    // numbers.push(i);
    count++;
  }
}
// console.log(numbers);
// console.log(numbers.length);
console.log(count);
