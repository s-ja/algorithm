const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ3986/input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

// A 와 B를 포물선으로 이었을때 교차가 없어야 한다.
// 모든 글자가 쌍을 이루어야 한다.

// 1. 글자의 갯수가 홀수인 단어는 제외한다.
// 2. A 다음에 B가 온다면 그 B의 다음에 B 가 오지 않는 경우를 제외한다.
// 2. A 다음에 A 혹은 B 다음에 B 가 오는 경우를 찾는다