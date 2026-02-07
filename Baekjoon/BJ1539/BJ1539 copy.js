const fs = require("fs");

// 로컬 테스트용
const raw = fs.readFileSync("Baekjoon/BJ1539/input.txt", "utf8").trim();

// ✅ 백준 제출용
// const raw = fs.readFileSync(0, "utf8").trim();

if (raw.length === 0) process.exit(0);

// 줄바꿈/공백 섞여도 안전하게 숫자 파싱
const data = raw.split(/\s+/).map(Number);
const N = data[0];

let answer = 0;
let stack = [];

for (let i = 1; i <= N; i++) {
  const x = data[i];
  while (stack.length && stack[stack.length - 1] >= x) {
    stack.pop();
  }
  stack.push(x);
  answer += stack.length - 1;
}

console.log(answer);
