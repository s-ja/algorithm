const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ3986/input.txt")
  .toString()
  .trim()
  .split("\n");

// A 와 B를 포물선으로 이었을때 교차가 없어야 한다.
// 모든 글자가 쌍을 이루어야 한다.

// 1. 글자의 갯수가 홀수인 단어는 제외한다.
// 2. A 다음에 B가 온다면 그 B의 다음에 B 가 오지 않는 경우를 제외한다.
// 2. A 다음에 A 혹은 B 다음에 B 가 오는 경우를 찾는다

const dataLength = input.shift();

// console.log(input);

let count = [];
let even = [];

for (let i = 0; i < input.length; i++) {
  let ab = [...input[i]];
  count.push(ab);
}

// console.log(count);

for (let i = 0; i < count.length; i++) {
  if (count[i].length % 2 !== 0) {
    // console.log();
  } else {
    even.push(count[i]);
  }
}

// for (let j = 0; j < count.length; j++) {
//   for (let i = 0; i < count[j].length; i++) {
//     if (count[j].length % 2 !== 0) {
//       console.log("홀수");
//     } else if (
//       count[i][j] !== count[i][j + 1] &&
//       count[i][j + 1] !== count[i][j + 2]
//     ) {
//       console.log("fail");
//     } else if (count[i][j] === count[i][j + 1]) {
//       console.log("find");
//       result.push(count[j]);
//     }
//   }
// }

// console.log(even);

// 2. A 다음에 B가 온다면 그 B의 다음에 B 가 오지 않는 경우를 제외한다.
// 2. A 다음에 A 혹은 B 다음에 B 가 오는 경우를 찾는다

let result = [];

for (let i = 0; i < even.length; i++) {
  //   console.log(even[i]);
  for (let j = 0; j < even[i].length; j++) {
    if (even[i][j] !== even[i][j + 1] && even[i][j + 1] !== even[i][j + 2]) {
      break;
    } else if (even[i][j] === even[i][j + 1]) {
      result.push(even[i]);
      break;
    }
  }
}

console.log(result);
