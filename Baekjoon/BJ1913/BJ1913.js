const fs = require("fs");
const input = require("fs")
  .readFileSync("Baekjoon/BJ1913/input.txt")
  .toString()
  .replace(/\r/g, "") // Windows 환경의 줄바꿈 문자 제거
  .trim()
  .split("\n");

console.log(input);
