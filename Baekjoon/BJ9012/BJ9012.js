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
  const data = input[i];
  let stackCount = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[j] === "(") {
      stackCount++;
    }
    if (data[j] === ")") {
      stackCount--;
    }
  }
  if (stackCount === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
