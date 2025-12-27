const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ11659/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const results = [];

for (let i = 0; i < M; i++) {
  const [start, end] = input[i + 2].split(" ").map(Number);
  results.push(
    numbers.slice(start - 1, end).reduce((acc, curr) => acc + curr, 0)
  );
}

console.log(results.join("\n"));
