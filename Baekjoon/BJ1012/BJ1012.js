const fs = require("fs");

// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ1012/input.txt")
  .toString()
  .trim()
  .split("\n");

// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

// 4방향(상, 하, 좌, 우)
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let outputs = [];

for (let tc = 0; tc < T; tc++) {
  const [M, N, K] = input[idx++].split(" ").map(Number); // M: 가로(x), N: 세로(y)
  const graph = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let j = 0; j < K; j++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    graph[y][x] = 1;
  }

  // (sx, sy)에서 시작해서 연결된 배추(1)들을 전부 방문 처리
  function bfs(sx, sy) {
    const queue = [[sx, sy]];
    let head = 0;
    visited[sy][sx] = true; // enqueue 시점에 방문 처리(중복 enqueue 방지)

    while (head < queue.length) {
      const [x, y] = queue[head++];

      for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];

        // 범위 체크
        if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
        // 배추가 아니면 스킵
        if (graph[ny][nx] === 0) continue;
        // 이미 방문했으면 스킵
        if (visited[ny][nx]) continue;

        visited[ny][nx] = true;
        queue.push([nx, ny]);
      }
    }
  }

  // 핵심: "지렁이 1마리" = "연결된 배추 덩어리(connected component) 1개"
  // 아직 방문 안 한 배추(1)를 발견할 때마다 BFS를 1번 돌리고 지렁이 수 +1
  let worms = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (graph[y][x] === 1 && !visited[y][x]) {
        bfs(x, y);
        worms++;
      }
    }
  }

  outputs.push(String(worms));
}

console.log(outputs.join("\n"));
