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
  //   console.log(arr);
  let newArr = [];
  for (let j = 1; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

// console.log(inputCount);
// console.log(inputTestCase);

function solution(inputCount, inputTestCase) {
  let step = 0;

  for (i = 0; i <= inputCount; i++) {
    const arr = inputTestCase[i].arr;
    for (j = 0; (j = true); j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        step = step + 1;
      }
    }
    console.log(inputCount, step);
  }
}

solution(inputCount, inputTestCase);
