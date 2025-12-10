const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ1764/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const neverHeard = [];
const neverSeen = [];

for (let i = 0; i < N; i++) {
  neverHeard.push(input[i]);
}

for (let i = N; i < N + M; i++) {
  neverSeen.push(input[i]);
}

const result = [];

for (let i = 0; i < input.length; i++) {
  if (neverHeard.includes(input[i]) && neverSeen.includes(input[i])) {
    result.push(input[i]);
  }
}

console.log(result.length);
console.log(result.sort().join("\n"));
