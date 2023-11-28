const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ25757/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ");

N = parseInt(N);

// N = 같이 플레이 하기를 신청한 횟수

// M = 게임의 종류

// Y = 윳놀이 / 2명
// F = 같은 그림 찾기/ 3명
// O = 원카드 / 4명

// console.log(N, M);
// console.log(input);

let test = new Set(input);
const unique = [...test];
// console.log(unique);

// M의 종류에 따라서 N의 횟수를 나눠줘야함

if (M === "Y") {
  // 윷놀이
  //   console.log("윷놀이");
  console.log(Math.floor(unique.length));
} else if (M === "F") {
  // 같은 그림 찾기
  //   console.log("같은 그림 찾기");
  console.log(Math.floor(unique.length / 2));
} else if (M === "O") {
  // 원카드
  //   console.log("원카드");
  console.log(Math.floor(unique.length / 3));
}
