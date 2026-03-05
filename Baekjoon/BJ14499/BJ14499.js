/**
 * 문제 번호: BJ14499
 * 문제 링크: https://www.acmicpc.net/problem/14499
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ14499/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M, x, y, K] = input.shift().split(" ").map(Number);
const map = input.slice(0, N).map((elem) => elem.split(" ").map(Number));
const commands = input.slice(N).shift().split(" ").map(Number);

const result = [];

// console.log(N, M, x, y, K);
// console.log(map);
// console.log(commands);

let top = 0;
let bottom = 0;
let front = 0;
let back = 0;
let left = 0;
let right = 0;

//동쪽은 1, 서쪽은 2, 북쪽은 3, 남쪽은 4
const rotate = (direction) => {
  if (direction === 1) {
    [top, left, bottom, right] = [left, bottom, right, top];
  } else if (direction === 2) {
    [top, left, bottom, right] = [right, top, left, bottom];
  } else if (direction === 3) {
    [top, front, bottom, back] = [front, bottom, back, top];
  } else if (direction === 4) {
    [top, front, bottom, back] = [back, top, front, bottom];
  }
};

let diceX = x;
let diceY = y;

// 동(1), 서(2), 북(3), 남(4)
const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];

for (let i = 0; i < K; i++) {
  const direction = commands[i];

  const nx = diceX + dx[direction];
  const ny = diceY + dy[direction];

  if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
    continue;
  }

  diceX = nx;
  diceY = ny;

  rotate(direction);

  if (map[nx][ny] === 0) {
    map[nx][ny] = bottom;
  } else {
    bottom = map[nx][ny];
    map[nx][ny] = 0;
  }

  result.push(top);
}

console.log(result.join("\n"));
