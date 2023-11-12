const { log } = require("console");
const fs = require("fs");
const { SourceMap } = require("module");
let input = fs
  .readFileSync("Baekjoon/BJ8979/input.txt")
  .toString()
  .trim()
  .split("\n");

const key = input.shift();

const countries = Number(key.split(" ")[0]);
const countryNumber = Number(key.split(" ")[1]);

const medals = input.map((a) => a.split(" ").map(Number));

medals.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  if (a[2] !== b[2]) return b[2] - a[2];
  return b[3] - a[3];
});

let rank = 1;
for (let i = 0; i < medals.length; i++) {
  if (medals[i][0] === countryNumber) {
    break;
  }
  if (
    i === 0 ||
    medals[i][1] !== medals[i - 1][1] ||
    medals[i][2] !== medals[i - 1][2] ||
    medals[i][3] !== medals[i - 1][3]
  ) {
    rank = i + 1;
  }
}

console.log(medals);
console.log(rank);
