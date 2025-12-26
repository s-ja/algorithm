const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ5344/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const number = Number(input.shift());
const results = [];

for (let i = 0; i < number; i++) {
  const integers = input[i]
    .toString()
    .replaceAll(" ", "/")
    .split("/")
    .map(Number);
  const temp1 = integers.filter((integer) => integer !== 0);
  const divisors = [];
  const commonDivisors = [];
  for (let integer of temp1) {
    const temp2 = [];
    for (let j = 1; j <= integer; j++) {
      if (integer % j === 0) {
        temp2.push(j);
      }
    }
    divisors.push(temp2);
  }
  for (let i = 0; i < divisors[0].length; i++) {
    for (let j = 0; j < divisors[1].length; j++) {
      if (divisors[0][i] === divisors[1][j]) {
        commonDivisors.push(divisors[0][i]);
      }
    }
  }
  results.push(Math.max(...commonDivisors));
}
console.log(results.join("\n"));
