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
// console.log(inputTestCase[0].arr);

function solution(inputCount, inputTestCase) {
  let step = 0;

  function switchValues(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  for (i = 0; i <= inputCount; i++) {
    for (j = 1; j <= inputTestCase[i].arr.length; j++) {
      if (inputTestCase[i].arr[0] > inputTestCase[i].arr[1]) {
        switchValues(inputTestCase[i].arr, 0, 1);
      }
    }
  }
  console.log(inputTestCase);
}

solution(inputCount, inputTestCase);
