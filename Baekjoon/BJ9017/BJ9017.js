const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ9017/input.txt")
  //   .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCaseNumber = Number(input.shift());

const testCase = [];

for (key in input) {
  if (key % 2 !== 0) {
    testCase.push(input[key].split(" ").map(Number));
  }
}

// console.log(testCase);

// 배열의 0 ~ N 까지는 등수, 즉 점수
// 배열의 각 요소(숫자)는 팀의 번호
// 반복문을 돌면서 배열의 각 요소(팀 번호)에 현재 배열의 key값(i), 즉 등수를 더한다.
// 6번이 더해지지 않은 팀은 계산하지 않는다.
// 팀 점수가 더해진 결과에서 가장 작은 값의 팀을 반환한다.

// + 팀 점수는 상위 4명의 점수를 합하여 계산한다.
// + 6명이 다 들어오지 못한 팀의 선수는 순위(점수)에서 제외된다.

// const teamScore = [
//   [1, 5, 9, 10, 12, 15],
//   [2, 7],
// ];

for (race of testCase) {
  const teamScore = [];
  const winners = {};
  for (let i = 0; i < race.length; i++) {
    if (!teamScore[race[i] - 1]) {
      teamScore[race[i] - 1] = [i + 1];
    } else {
      teamScore[race[i] - 1].push(i + 1);
    }
  }
  for (team in teamScore) {
    if (teamScore[team].length < 6) {
      continue;
    } else {
      winners[team] = 0;
      for (let j = 0; j < 4; j++) {
        winners[team] += teamScore[team][j];
      }
    }
  }
  console.log(winners);
}
