const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ9012/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const number = input.shift();
const result = [];

for (let i = 0; i < number; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      stack.push(input[i][j]);
    } else if (input[i][j] === ")") {
      if (stack.length === 0) {
        stack.push(input[i][j]);
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
