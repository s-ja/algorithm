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

// console.log(board);
// const boardLog = [
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W", "B", "B"],
//   ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
// ];

// i = column
// j = row

const testCases = [];
const paintedCounts = [];

for (let i = 0; i <= N - 8; i++) {
  const testCase = [];
  for (let j = 0; j <= M - 8; j++) {
    testCase.push(board.slice(i, i + 8).map((row) => row.slice(j, j + 8)));
  }
  testCases.push(testCase);
}

// console.log(JSON.stringify(testCases, null, 2));

// testCases 배열의 0 번째 인자 = x 를 0 으로 뒀을 때, 만들 수 있는 모든 8 * 8 체스판 조합 = 10 기준 3개

// const testCasesLog = [
//   [
//     [
//       ["B", "B", "B", "B", "B", "B", "B", "B"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//     ],
//     [
//       ["B", "B", "B", "B", "B", "B", "B", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//     ],
//     [
//       ["B", "B", "B", "B", "B", "B", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//     ],
//   ],
//   [
//     [
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//     ],
//     [
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//     ],
//     [
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//     ],
//   ],
//   [
//     [
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["B", "B", "B", "B", "B", "B", "B", "B"],
//     ],
//     [
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "W"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "B", "B", "B", "B", "B", "B", "B"],
//     ],
//     [
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["W", "B", "W", "B", "W", "B", "W", "B"],
//       ["B", "W", "B", "W", "B", "W", "B", "B"],
//       ["B", "B", "B", "B", "B", "B", "B", "B"],
//     ],
//   ],
// ];

for (let i = 0; i < testCases.length; i++) {
  for (let j = 0; j < testCases[i].length; j++) {
    const thisBoard = testCases[i][j];
    let paintedCount = painter2(thisBoard);
    paintedCounts.push(paintedCount);
  }
}

console.log(paintedCounts);
console.log(Math.min(...paintedCounts));

function painter(board) {
  let paintedCount = 0;
  let color = board[0][0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== color) {
        paintedCount++;
      }
      color = color === "B" ? "W" : "B";
    }
  }
  return paintedCount;
}

function painter2(board) {
  let paintedCount = 0;
  const startColor = board[0][0];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 체스판 패턴: (i+j)가 짝수면 시작 색, 홀수면 반대 색
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

const testBoard = [
  ["W", "W", "B", "W", "B", "W", "B", "B"], // 6
  ["W", "B", "W", "B", "W", "B", "W", "B"], // 8
  ["B", "W", "B", "W", "B", "W", "B", "B"], // 7
  ["W", "B", "W", "B", "W", "B", "W", "B"], // 8
  ["B", "W", "B", "W", "B", "W", "B", "B"], // 7
  ["W", "B", "W", "B", "W", "B", "W", "B"], // 8
  ["B", "W", "B", "W", "B", "W", "B", "B"], // 7
  ["B", "B", "B", "B", "B", "B", "B", "B"], // 4
];
// console.log(painter(testBoard)); // 6 + 8 + 7 + 8 + 7 + 8 + 7 + 4 = 55
// console.log(painter2(testBoard)); // 6 + 8 + 7 + 8 + 7 + 8 + 7 + 4 = 55
