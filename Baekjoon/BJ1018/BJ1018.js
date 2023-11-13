const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1018/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

// console.log(N, M);
// N = row
// M = column

let board = [];

for (let index = 0; index < input.length; index++) {
  let row = input[index].split("");
  board.push(row);
}

// board = [
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
//   ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B"],
//   ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B"],
// ];

// console.log(board);

// 1. 몇번을 칠했는지 구해야 함.
// 1-1. 해당 블럭이 B일 경우 다음 블럭에 또 B가 나오면 +1, 해당 블럭이 W일 경우 다음 블럭에 또 W가 나오면 +1

// 1. 주어진 체스판에서 나올 수 있는 8x8 체스판의 모든 경우의 수를 뽑는다.
// 1-1.N(row)이 8보다 클 경우 첫번째부터 n번째까지 인자가 8개 나올 수 있는 경우를 뽑는다.
// 1-2.M(column)이 8보다 클 경우 첫번째부터 n번째까지 인자가 8개 나올 수 있는 경우를 뽑는다.
// 1-3. 완전히 동일한 경우들을 하나로 합친다.

// 2. 각 경우의 수에서 칠해야 하는 수를 구한다.
// 2-1. 체스판 줄의 n번째가 W(B)일 경우 n+1번째가 W(B)이면 색칠 횟수를 +1을 하고 n+2로 넘어간다.

// 3. 칠하는 횟수가 가장 작은 경우의 수를 뽑는다.

// 4. 해당 경우의 수에서 칠하는 횟수를 반환한다.

const testCase = [];

if (N > 8 || M > 8) {
  for (let i = 0; i < N - 8; i++) {
    for (let j = 0; j < M - 8; j++) {}
  }
}
