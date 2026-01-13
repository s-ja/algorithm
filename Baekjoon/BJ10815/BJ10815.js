const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ10815/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const m = Number(input[2]);
const numbers = input[3].split(" ").map(Number);
const result = [];

for (let i = 0; i < m; i++) {
  if (cards.includes(numbers[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
