/**
 * 문제 번호: BJ1991
 * 문제 링크: https://www.acmicpc.net/problem/1991
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("BJ1991/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);

console.log(N)