const fs = require("fs");
const input = fs.readFileSync("Baekjoon/BJ10818/input.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const numbers = input[1].split(" ").map(Number);

console.log(Math.min(...numbers), Math.max(...numbers));