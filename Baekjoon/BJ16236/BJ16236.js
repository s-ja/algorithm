/**
 * 문제 번호: BJ16236
 * 문제 링크: https://www.acmicpc.net/problem/16236
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ16236/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

let sharkSize = 2;
let sharkEat = 0;
let sharkTime = 0;
let sharkX = 0;
let sharkY = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 9) {
      sharkX = j;
      sharkY = i;
    }
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// 상어 자신(9)를 제외한 모든 물고기들의 거리를 계산
// 각 크기의 물고기 크기를 key로 하는 객체를 만들고 거리를 value로 저장
const fishLocation = {};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 9 || map[i][j] === 0) continue;
    if (!fishLocation[map[i][j]]) {
      fishLocation[map[i][j]] = [];
    }
    fishLocation[map[i][j]].push({ x: j, y: i });
  }
}

function bfs(startX, startY) {
  const distance = Array.from({ length: N }, () => Array(N).fill(-1));
  const queue = [[startX, startY]];
  distance[startY][startX] = 0;

  let head = 0;
  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위 체크
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      // 이미 방문했거나 지나갈 수 없는 칸
      if (distance[ny][nx] !== -1) continue;
      if (map[ny][nx] > sharkSize) continue; // 큰 물고기는 못 지나감

      distance[ny][nx] = distance[y][x] + 1;
      queue.push([nx, ny]);
    }
  }

  return distance;
}

function findFish() {
  const distance = bfs(sharkX, sharkY);
  const canEat = [];

  // 먹을 수 있는 물고기 찾기
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      // 물고기가 있고, 크기가 작고, 도달 가능한가?
      if (map[y][x] > 0 && map[y][x] < sharkSize && distance[y][x] !== -1) {
        canEat.push({
          x: x,
          y: y,
          dist: distance[y][x],
        });
      }
    }
  }

  // 먹을 물고기 없으면 null
  if (canEat.length === 0) return null;

  // 우선순위 정렬
  canEat.sort((a, b) => {
    if (a.dist !== b.dist) return a.dist - b.dist; // 1. 거리 가까운 순
    if (a.y !== b.y) return a.y - b.y; // 2. 위쪽 우선
    return a.x - b.x; // 3. 왼쪽 우선
  });

  return canEat[0]; // 가장 우선순위 높은 물고기
}

map[sharkY][sharkX] = 0; // 상어 시작 위치 0으로

while (true) {
  const target = findFish();

  // 더 이상 먹을 물고기 없음
  if (target === null) break;

  // 물고기로 이동
  sharkTime += target.dist;
  sharkX = target.x;
  sharkY = target.y;
  map[sharkY][sharkX] = 0; // 물고기 먹음

  // 성장 처리
  sharkEat++;
  if (sharkEat === sharkSize) {
    sharkSize++;
    sharkEat = 0;
  }
}

console.log(sharkTime);
