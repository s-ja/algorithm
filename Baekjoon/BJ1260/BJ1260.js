const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ1260/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const edges = input.map((line) => line.split(" ").map(Number));

const result = [];

const adj = Array.from({ length: N + 1 }, () => []);

for (const [u, v] of edges) {
  adj[u].push(v);
  adj[v].push(u);
}

for (let v = 1; v <= N; v++) {
  adj[v].sort((a, b) => a - b);
}

const dfsOrder = [];
const bfsOrder = [];

const visitedDfs = new Array(N + 1).fill(false);
const visitedBfs = new Array(N + 1).fill(false);

function dfs(cur) {
  visitedDfs[cur] = true;
  dfsOrder.push(cur);

  for (const next of adj[cur]) {
    if (visitedDfs[next]) continue;
    dfs(next);
  }
}

function bfs(start) {
  const queue = [start];
  let head = 0;

  visitedBfs[start] = true;

  while (head < queue.length) {
    const cur = queue[head++];
    bfsOrder.push(cur);

    for (const next of adj[cur]) {
      if (visitedBfs[next]) continue;
      visitedBfs[next] = true;
      queue.push(next);
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsOrder.join(" "));
console.log(bfsOrder.join(" "));

// result.push(dfsOrder);
// result.push(bfsOrder);
// console.log(result.map((item) => item.join(" ")).join("\n"));
