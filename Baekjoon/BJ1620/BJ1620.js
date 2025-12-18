const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ1620/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 1. 포켓몬 이름 → 인덱스 매핑 생성 (O(N))
const nameToIndex = {};
for (let i = 1; i <= N; i++) {
  nameToIndex[input[i]] = i;
}

const result = [];

for (let i = N + 1; i <= N + M; i++) {
  const question = input[i];
  if (Number(question)) {
    result.push(input[Number(question)]);
  } else {
    // 문자열이면 인덱스 출력 (O(1) 조회)
    result.push(nameToIndex[question]);
  }
}

// console.log(result.join("\n"));

console.log(nameToIndex);
