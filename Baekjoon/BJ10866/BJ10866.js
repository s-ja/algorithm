const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ10866/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const number = input.shift();
const deque = [];
const result = [];

for (let i = 0; i < number; i++) {
  const [command, value] = input[i].split(" ");
  if (command === "push_front") {
    deque.unshift(value);
  } else if (command === "push_back") {
    deque.push(value);
  } else if (command === "pop_front") {
    if (deque.length === 0) {
      result.push("-1");
    } else {
      result.push(deque.shift());
    }
  } else if (command === "pop_back") {
    if (deque.length === 0) {
      result.push("-1");
    } else {
      result.push(deque.pop());
    }
  } else if (command === "size") {
    result.push(deque.length);
  } else if (command === "empty") {
    if (deque.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (command === "front") {
    if (deque.length === 0) {
      result.push("-1");
    } else {
      result.push(deque[0]);
    }
  } else if (command === "back") {
    if (deque.length === 0) {
      result.push("-1");
    } else {
      result.push(deque[deque.length - 1]);
    }
  }
}

console.log(result.join("\n"));
