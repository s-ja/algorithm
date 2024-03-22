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

const [N, score, P] = input[0].split(" ").map(Number);

console.log(N, score, P);
console.log(input);

if (input[1]) {
  const rank = input[1].split(" ").map(Number);

  console.log(rank);

  let final = [];

  for (let i = 0; i < P; i++) {
    if (rank[i] > score) {
      final.push(rank[i]);
    } else {
      final.push(score);
    }
  }

  if (score === rank[P - 1]) {
    console.log(-1);
  } else {
    console.log(final.indexOf(score) + 1);
  }
} else {
  console.log(1);
}
