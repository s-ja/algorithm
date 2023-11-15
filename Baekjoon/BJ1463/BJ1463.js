const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("Baekjoon/BJ1463/input.txt").toString().trim();

input = Number(input);

// console.log(typeof input, input);

function minOperations(N) {
  const dp = Array(N + 1).fill(0);
  console.log(dp);

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[N];
}

console.log(minOperations(input));
