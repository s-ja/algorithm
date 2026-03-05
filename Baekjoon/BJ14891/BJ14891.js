/**
 * 문제 번호: BJ14891
 * 문제 링크: https://www.acmicpc.net/problem/14891
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ14891/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const wheels = input.slice(0, 4).map((elem) => elem.split("").map(Number));
const K = Number(input[4]);
const commands = input.slice(5).map((elem) => elem.split(" ").map(Number));

const rotate = (wheel, direction) => {
  if (direction === 1) {
    const last = wheel.pop();
    wheel.unshift(last);
  } else {
    const first = wheel.shift();
    wheel.push(first);
  }
};

// for (let i = 0; i < K; i++) {
//   const [wheelNumber, direction] = commands[i];
//   rotate(wheels[wheelNumber - 1], direction);
// }

for (let i = 0; i < K; i++) {
  const [wheelNumber, direction] = commands[i];
  const rotations = [0, 0, 0, 0];

  rotations[wheelNumber - 1] = direction;

  for (let j = wheelNumber - 1; j > 0; j--) {
    if (wheels[j][6] !== wheels[j - 1][2]) {
      rotations[j - 1] = -rotations[j];
    } else {
      break;
    }
  }

  for (let j = wheelNumber - 1; j < 3; j++) {
    if (wheels[j][2] !== wheels[j + 1][6]) {
      rotations[j + 1] = -rotations[j];
    } else {
      break;
    }
  }

  rotations.forEach((dir, idx) => {
    if (dir !== 0) rotate(wheels[idx], dir);
  });
}

// console.log(wheels);

let result = 0;
for (let i = 0; i < 4; i++) {
  if (wheels[i][0] === 1) {
    result += Math.pow(2, i);
  }
}

console.log(result);
