const fs = require("fs");

// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ2178/input.txt")
  .toString()
  .trim()
  .split("\n");

// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 미로: '1'은 이동 가능, '0'은 벽
// grid[y][x] 형태로 저장 (y: 0..N-1, x: 0..M-1)
const grid = [];
for (let y = 0; y < N; y++) {
  grid.push(
    input[1 + y]
      .trim()
      .split("")
      .map((ch) => (ch === "1" ? 1 : 0))
  );
}

// dist[y][x] = (0,0)에서 (x,y)까지의 최단 거리(칸 수). 방문 안 했으면 0.
const dist = Array.from({ length: N }, () => Array(M).fill(0));

// 4방향 이동(상하좌우)
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// BFS 큐 (shift 금지 → head 포인터)
const queue = [[0, 0]];
let head = 0;

// 시작점은 문제 조건상 항상 '1'이라고 가정(백준 2178)
dist[0][0] = 1;

while (head < queue.length) {
  const [x, y] = queue[head++];

  // 도착점에 도달하면 최단거리 확정 (BFS 특성)
  if (x === M - 1 && y === N - 1) break;

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];

    // 범위 체크
    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
    // 벽이면 스킵
    if (grid[ny][nx] === 0) continue;
    // 이미 방문(거리 기록)했으면 스킵
    if (dist[ny][nx] !== 0) continue;

    // "enqueue 시점"에 거리(방문) 확정
    dist[ny][nx] = dist[y][x] + 1;
    queue.push([nx, ny]);
  }
}

console.log(dist[N - 1][M - 1]);
