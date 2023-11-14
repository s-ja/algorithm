const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1120/input.txt")
  .toString()
  .trim()
  .split(" ");

let [a, b] = input;

// console.log(a, b);

// 문자열 a 와 b 는 길이가 같아야 한다.
// a 와 b 의 차이가 최소여야 한다.
// 차이가 최소일때의 차이 값을 반환해야 한다.
// unshift / push

// topabcoder
// XXXXXXXabc
// XXXXXXabcX
// XXXXXabcXX
// ...

console.log(a);
console.log(b);

let aArr = [...a];
let bArr = [...b];

// console.log(bArr);

test = [];

for (let i = 1; i < bArr.length; i++) {
  let clone = [...aArr];
  for (let j = 0; j < bArr.length - aArr.length; j++) {
    clone.unshift("X");
  }
  test.push(clone);
}

// console.log(test);

for (let i = 0; i < bArr.length - aArr.length; i++) {
  if (test[i + 1]) {
    for (let j = 1; j < bArr.length - aArr.length + 1; j++) {
      if (test[i + j]) {
        test[i + j].shift();
        test[i + j].push("X");
      }
    }
  }
}

console.log(test);



// [
//   ["X", "X", "X", "X", "X", "X", "X", "a", "b", "c"],
//   ["X", "X", "X", "X", "X", "X", "a", "b", "c", "X"],
//   ["X", "X", "X", "X", "X", "a", "b", "c", "X", "X"],
//   ["X", "X", "X", "X", "a", "b", "c", "X", "X", "X"],
//   ["X", "X", "X", "a", "b", "c", "X", "X", "X", "X"],
//   ["X", "X", "a", "b", "c", "X", "X", "X", "X", "X"],
//   ["X", "a", "b", "c", "X", "X", "X", "X", "X", "X"],
//   ["a", "b", "c", "X", "X", "X", "X", "X", "X", "X"],
//   ["X", "a", "b", "c", "X", "X", "X", "X", "X", "X"],
// ];
