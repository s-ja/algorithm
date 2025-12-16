const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ10845/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const number = input.shift();
const que = [];
const result = [];

for (let i = 0; i < number; i++) {
  const [command, value] = input[i].split(" ");
  if (command === "push") {
    que.push(value);
  } else if (command === "pop") {
    if (que.length === 0) {
      result.push("-1");
    } else {
      result.push(que.shift());
    }
  } else if (command === "size") {
    result.push(que.length);
  } else if (command === "empty") {
    if (que.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (command === "front") {
    if (que.length === 0) {
      result.push("-1");
    } else {
      result.push(que[0]);
    }
  } else if (command === "back") {
    if (que.length === 0) {
      result.push("-1");
    } else {
      result.push(que[que.length - 1]);
    }
  }
}

console.log(result.join("\n"));
