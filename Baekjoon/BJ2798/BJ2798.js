const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ2798/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const numbers = input.shift().split(" ").map(Number);

let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = numbers[i] + numbers[j] + numbers[k];
      if (sum <= M) {
        result = Math.max(result, sum);
      }
    }
  }
}

console.log(result);
