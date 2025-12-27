const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ5347/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const number = Number(input.shift());
const results = [];

for (let i = 0; i < number; i++) {
  const temps = input[i].toString().replaceAll(" ", "/").split("/").map(Number);
  const [a, b] = temps.filter((integer) => integer !== 0);
  const commonDivisors = [];
  for (let j = 2; j < a && j < b; j++) {
    if (a % j === 0 && b % j === 0) {
      commonDivisors.push(j);
    }
  }

  // console.log(commonDivisors);
  if (commonDivisors.length === 0 && a !== b) {
    results.push(a * b);
  } else if (a === b) {
    results.push(a);
  } else {
    results.push((a * b) / Math.max(...commonDivisors));
  }
}

console.log(results.join("\n"));
