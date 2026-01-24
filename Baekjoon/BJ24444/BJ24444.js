const fs = require("fs");

// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ24444/input.txt")
  .toString()
  .trim()
  .split("\n");

// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);

// 1-index 인접 리스트: adj[0]은 비워둠 (정점 번호를 그대로 인덱스로 쓰기 위함)
const adj = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u); // 무방향 그래프라 양쪽에 추가
}

// 문제 조건: 인접 정점은 오름차순으로 방문
for (let v = 1; v <= N; v++) {
  adj[v].sort((a, b) => a - b);
}

// orderOf[v] = 정점 v가 BFS에서 몇 번째로 방문됐는지 (방문 안 하면 0)
const orderOf = new Array(N + 1).fill(0);
let order = 1;

// BFS 큐: shift() 금지 (O(N) 발생) → head 포인터 사용
const queue = [];
let head = 0;

orderOf[R] = order++;
queue.push(R);

while (head < queue.length) {
  const cur = queue[head++];
  console.log("pop", cur, "queue(remain)", queue.slice(head));

  for (const next of adj[cur]) {
    if (orderOf[next] !== 0) continue; // 이미 방문
    orderOf[next] = order++;
    queue.push(next);
    console.log("  push", next);
  }
}

// 출력: 1..N 각 정점의 방문 순서 (미방문이면 0)
console.log(orderOf.slice(1).join("\n"));
