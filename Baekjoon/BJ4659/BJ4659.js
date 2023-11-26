const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ4659/input.txt")
  .toString()
  .trim()
  .split("\n");

const end = input.pop();
console.log(input);

// 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
// 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
// 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.

const vowel = ["a", "e", "i", "o", "u"];
const consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m"];

for (let i = 0; i < input.length; i++) {
  if (
    input[i].split("").includes("a") ||
    input[i].split("").includes("e") ||
    input[i].split("").includes("i") ||
    input[i].split("").includes("o") ||
    input[i].split("").includes("u")
  ) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i].split("")[j] === input[i].split("")[j + 1] ?? input[i].split("")[j] === input[i].split("")[j + 2]) {
        if (
          (input[i].split("")[j] === "e" ??
            input[i].split("")[j + 1] === "e") ||
          (input[i].split("")[j] === "o" ?? input[i].split("")[j + 1] === "o")
        ) {
          console.log(`<${input[i]}> is acceptable.`);
        }else {
          console.log(`<${input[i]}> is not acceptable.`);
        }
      }
    }
  } else {
    console.log(`<${input[i]}> is not acceptable.`);
  }
}

// "a", "e", "i", "o", "u" 를 포함하지 않는 문자열을 거른다.
// 같은 글자가 연속적으로 두번 오는 경우를 거른다.
// "ee", "oo" 는 허용한다.
