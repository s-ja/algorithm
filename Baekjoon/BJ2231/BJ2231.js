const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ2231/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input.shift());
const generators = [];

for (let i = 1; i < N; i++) {
  const sum = i
    .toString()
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  if (sum + i === N) {
    generators.push(i);
  }
}

// console.log(generators);
console.log(generators.length > 0 ? generators[0] : 0);
