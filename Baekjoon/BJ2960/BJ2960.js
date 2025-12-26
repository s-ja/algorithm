const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ2960/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const numbers = [];
const primes = [];
const deletedNumbers = [];

for (let i = 2; i <= N; i++) {
  numbers.push(i);
}
// console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  let isPrime = true;
  for (let j = 2; j < numbers[i]; j++) {
    if (numbers[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(numbers[i]);
  }
}

for (const prime of primes) {
  for (const number of numbers) {
    if (number % prime === 0) {
      deletedNumbers.push(number);
      numbers.splice(numbers.indexOf(number), 1);
    }
  }
}

console.log(deletedNumbers[K - 1]);
