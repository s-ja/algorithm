const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ10828/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const number = Number(input.shift());

const stack = [];
const result = [];

for (let i = 0; i < number; i++) {
  const [command, value] = input[i].split(" ");
  const length = stack.length;
  if (command === "push") {
    stack.push(value);
  } else if (command === "pop") {
    if (length === 0) {
      result.push("-1");
    } else {
      result.push(stack.pop());
    }
  } else if (command === "size") {
    result.push(length);
  } else if (command === "empty") {
    if (length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (command === "top") {
    if (length === 0) {
      result.push("-1");
    } else {
      result.push(stack[length - 1]);
    }
  }
}
console.log(result.join("\n"));
