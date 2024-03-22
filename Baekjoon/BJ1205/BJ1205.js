const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1205/input.txt")
  //   .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//첫째 줄에 N(리스트에 있는 점수 N개),
// 태수의 새로운 점수,
// 그리고 P(랭킹 리스트에 올라 갈 수 있는 점수의 개수 P)가 주어진다.

//둘째 줄에는 현재 랭킹 리스트에 있는 점수가 비오름차순으로 주어진다.

const [n, score, p] = input[0].split(" ").map(Number);

if (n === 0) {
  console.log(1);
  return;
}

const arr = input[1].split(" ").map(Number);
//   console.log(rank);
arr.push(score);
const arrSorted = arr.sort((a, b) => b - a);
console.log(arrSorted);
let indexes = [];
let index = arrSorted.indexOf(score);

while (index !== -1) {
  indexes.push(index + 1);
  index = arrSorted.indexOf(score, index + 1);
}

if (indexes[indexes.length - 1] > p) console.log(-1);
else console.log(indexes[0]);
