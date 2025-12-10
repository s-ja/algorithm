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

for (let i = 0; i < neverSeen.length; i++) {
  for (let j = 0; j < neverHeard.length; j++) {
    if (neverSeen[i] === neverHeard[j]) {
      result.push(neverSeen[i]);
      break;
    } else if (neverHeard[j] > neverSeen[i]) {
      break;
    }
  }
}
console.log(result.length);
console.log(result.join("\n"));
