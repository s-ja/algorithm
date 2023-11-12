const fs = require("fs");

let input = fs.readFileSync("/dev/stdin");

function solution(n) {
  if (n % 2 === 0) {
    console.log("CY");
  } else {
    console.log("SK");
  }
}

solution(input);
