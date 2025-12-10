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

neverHeard.sort();
neverSeen.sort();

const result = [];

if (neverHeard.length < neverSeen.length) {
  for (let i = 0; i < neverHeard.length; i++) {
    if (neverSeen.includes(neverHeard[i])) {
      result.push(neverHeard[i]);
    }
  }
} else {
  for (let i = 0; i < neverSeen.length; i++) {
    if (neverHeard.includes(neverSeen[i])) {
      result.push(neverSeen[i]);
    }
  }
}

console.log(result.length);
console.log(result.sort().join("\n"));
