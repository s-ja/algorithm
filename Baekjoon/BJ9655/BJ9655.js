const fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/seungjian/Desktop/DEV/algorythm/Baekjoon/BJ9655/input.txt"
  )
  .toString()
  .trim();
input = input.split("\n");

let inputCount = input[0];
const inputTestCase = [];

for (let i = 1; i <= inputCount; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  const testCase = {
    N: arr[0],
    arr: arr.slice(1),
  };
  inputTestCase.push(testCase);
}

// console.log(inputCount);
// console.log(inputTestCase);

function solution(inputCount, inputTestCase) {
  for (let i = 0; i < inputCount; i++) {
    const arr = inputTestCase[i].arr;
    let steps = 0;

    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length - 1 - j; k++) {
        if (arr[k] > arr[k + 1]) {
          [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
          steps++;
        }
      }
    }

    console.log(`${i + 1} ${steps}`);
  }
}

solution(inputCount, inputTestCase);
