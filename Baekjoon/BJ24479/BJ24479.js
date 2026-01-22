const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ24479/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(0);
let order = 1;

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

graph.forEach(node => node.sort((a, b) => a - b));

function dfs(v) {
  visited[v] = order++;
  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(R);

console.log(visited.slice(1).join("\n"));