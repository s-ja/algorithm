const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ8979/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const countries = input.map((line) => line.split(" ").map(Number));

console.log(countries);

countries.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  if (a[2] !== b[2]) return b[2] - a[2];
  return b[3] - a[3];
});

const KMedals = countries.find((country) => country[0] === Number(K));

let rank = 1;
for (let country of countries) {
  if (
    country[1] > KMedals[1] ||
    (country[1] === KMedals[1] && country[2] > KMedals[2]) ||
    (country[1] === KMedals[1] &&
      country[2] === KMedals[2] &&
      country[3] > KMedals[3])
  ) {
    rank++;
  } else if (country[0] === Number(K)) {
    break;
  }
}

console.log(rank);
