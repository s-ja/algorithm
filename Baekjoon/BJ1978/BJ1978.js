const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ1978/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let count = 0;

for (let i = 0; i < N; i++) {
  let isPrime = true;
  if (numbers[i] === 1) {
    continue;
  }
  for (let j = 2; j < numbers[i]; j++) {
    if (numbers[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    count++;
  }
}

console.log(count);
