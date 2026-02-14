/**
 * 문제 번호: BJ11279
 * 문제 링크: https://www.acmicpc.net/problem/11279
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ11279/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

const result = [];
const heap = [];

for (let i = 0; i < N; i++) {
  if (numbers[i] === 0) {
    // heap에서 가장 큰 값을 제거하고 결과 배열에 추가
    result.push(heap.pop() || 0);
  } else {
    // heap에 값을 추가
    heap.push(numbers[i]);
    // heap을 정렬
    heap.sort((a, b) => a - b);
  }
}
console.log(result.join("\n"));
