const fs = require("fs");
let input = fs
  //   .readFileSync("Baekjoon/BJ9017/input.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

// 배열의 0 ~ N 까지는 등수, 즉 점수
// 배열의 각 요소(숫자)는 팀의 번호
// 반복문을 돌면서 배열의 각 요소(팀 번호)에 현재 배열의 key값(i), 즉 등수를 더한다.
// 6번이 더해지지 않은 팀은 계산하지 않는다.
// 팀 점수가 더해진 결과에서 가장 작은 값의 팀을 반환한다.

// + 팀 점수는 상위 4명의 점수를 합하여 계산한다.
// + 6명이 다 들어오지 못한 팀의 선수는 순위(점수)에서 제외된다.
// + 동점의 경우에는 다섯 번째 주자가 가장 빨리 들어온 팀이 우승하게 된다.

// race를 순환하며 각 팀의 완주한 선수의 갯수를 샌다.
// 완주한 선수가 6명이 되지 못한 팀은 점수 계산에서 제외한다.
// 완주한 선수가 6명인 팀의 선수만으로 점수(등수)를 다시 계산한다.
// 완주한 선수가 6명인 팀의 상위 네명의 점수를 더한다.
// 만약 점수가 같을 경우 다섯번째 선수의 점수(등수)가 낮은 쪽이 우승이다.

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const teamNumbers = input.shift().split(" ").map(Number);
  const team = {};
  const lost = new Set();

  for (num of teamNumbers) {
    if (!team[num]) {
      team[num] = 1;
    } else {
      team[num]++;
    }

    if (team[num] < 6) {
      lost.add(num);
    } else {
      lost.delete(num);
    }
  }
  //   console.log(team, lost);

  let score = 1;
  let scoreBoard = {};
  for (num of teamNumbers) {
    if (!lost.has(num)) {
      if (!scoreBoard[num]) {
        scoreBoard[num] = [1, score, 0];
      } else {
        if (scoreBoard[num][0] < 4) {
          scoreBoard[num][0]++;
          scoreBoard[num][1] += score;
        } else if (scoreBoard[num][0] === 4) {
          scoreBoard[num][0]++;
          scoreBoard[num][2] = score;
        }
      }
      score++;
    }
  }
  //   console.log(scoreBoard);

  const sortedTeam = Object.entries(scoreBoard).sort((a, b) => {
    if (a[1][1] === b[1][1]) {
      return a[1][2] - b[1][2];
    } else {
      return a[1][1] - b[1][1];
    }
  });
  //   console.log(sortedTeam);
  console.log(sortedTeam[0][0]);
}
