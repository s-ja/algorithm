const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ1260/input.txt")
  .toString()
  .trim()
  .split("\n");
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
const visited = new Array(N + 1).fill(false);

function dfs(cur) {
  dfsOrder.push(cur);
  for (const next of adj[cur]) {
    if (dfsOrder.includes(next)) continue;
    dfs(next);
  }
}

function bfs(cur) {
  const queue = [cur];
  visited[cur] = true;
  while (queue.length > 0) {
    const cur = queue.shift();
    bfsOrder.push(cur);
    for (const next of adj[cur]) {
      if (visited[next]) continue;
      visited[next] = true;
      queue.push(next);
    }
  }
}

dfs(V);
bfs(V);

result.push(dfsOrder);
result.push(bfsOrder);

console.log(result.map((item) => item.join(" ")).join("\n"));
