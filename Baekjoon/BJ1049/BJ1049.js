const { count } = require("console");
const fs = require("fs");

let input = fs
  .readFileSync("Baekjoon/BJ1049/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ");

// 기타는 6줄, 왼쪽의 한 팩은 6줄

N = Number(N); // 끊어진 기타 줄의 수
M = Number(M); // 고를 수 있는 브랜드의 수

// console.log(N, M);
// console.log(input);

// 1.끊어진 기타 줄의 수를 6으로 나눈다
// 2.끊어진 기타 줄의 수를 6으로 나누고 남은 나머지를 구한다.
// 3.고를 수 있는 선택지 중 6개 묶음이 가장 저렴한 것을 1. 의 값을 곱한다.
// 4.고를 수 있는 선택지 중 단일 기타줄이 가장 저렴한 것을 구해 2.를 곱한다.
// 5. 고를 수 있는 선택지 중 6개 묶음이 가장 저렴한 것이 4.보다 작을 경우 고를 수 있는 선택지 중 6개 묶음이 가장 저렴한 것을 하나 더 더한다.

// const N = 9;
// const M = 16;

// const input = [
//   "21 25",
//   "77 23",
//   "23 88",
//   "95 43",
//   "96 19",
//   "59 36",
//   "80 13",
//   "51 24",
//   "15 8",
//   "25 61",
//   "21 22",
//   "3 9",
//   "68 68",
//   "67 100",
//   "83 98",
//   "96 57",
// ];

let pack = parseInt(N / 6);
let string = N % 6;

// console.log(pack, string);

let data = [];

for (let i = 0; i < input.length; i++) {
  let price = input[i].split(" ");
  data.push(price);
}

// console.log(data);

const firstElements = data.map((item) => parseInt(item[0]));
let cheapPack = Math.min(...firstElements);
const secondElements = data.map((item) => parseInt(item[1]));
let cheapString = Math.min(...secondElements);

let finalPrice = pack * cheapPack + string * cheapString;

if (cheapPack > cheapString*6) {
    finalPrice = N * cheapString;
}

if (cheapString * string > cheapPack) {
  finalPrice = finalPrice - cheapString * string + cheapPack;
}

console.log(finalPrice);
