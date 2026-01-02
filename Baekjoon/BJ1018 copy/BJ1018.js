const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ1018 copy/input.txt")
  .toString()
  .trim()
  .split("\n");

// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const board = [];

for (elem of input) {
  elem = elem.replace(/\r/g, "");
  board.push(elem.split(""));
}

const testCases = [];
const paintedCounts = [];

for (let i = 0; i <= N - 8; i++) {
  const testCase = [];
  for (let j = 0; j <= M - 8; j++) {
    testCase.push(board.slice(i, i + 8).map((row) => row.slice(j, j + 8)));
  }
  testCases.push(testCase);
}
for (let i = 0; i < testCases.length; i++) {
  for (let j = 0; j < testCases[i].length; j++) {
    const thisBoard = testCases[i][j];
    const countB = painter(thisBoard, "B");
    const countW = painter(thisBoard, "W");
    paintedCounts.push(Math.min(countB, countW));
  }
}

// console.log(paintedCounts);
console.log(Math.min(...paintedCounts));

function painter(board, startColor) {
  let paintedCount = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const shouldBeStartColor = (i + j) % 2 === 0;
      const expectedColor = shouldBeStartColor
        ? startColor
        : startColor === "B"
        ? "W"
        : "B";

      if (board[i][j] !== expectedColor) {
        paintedCount++;
      }
    }
  }

  return paintedCount;
}
