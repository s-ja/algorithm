const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ15649/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 상태(state):
// - path: 현재까지 선택한 숫자들의 배열
// - used: 각 숫자가 이미 선택되었는지 표시하는 배열
const path = [];
const used = Array(N + 1).fill(false);

let output = "";

// DFS(depth): 현재까지 depth개를 선택한 상태
function dfs(depth) {
  // TODO 1:
  // 만약 depth === M 이라면,
  // - path에 들어있는 숫자들을 출력 형식으로 기록하고
  // - return 한다
  if (depth === M) {
    output += path.join(" ") + "\n";
    return;
  }

  // TODO 2:
  // 1부터 N까지 순회하면서,
  // 아직 선택하지 않은 숫자(i)를 고른다
  for (let i = 1; i <= N; i++) {
    if (used[i]) continue; // 이미 선택한 숫자는 건너뛴다

    // TODO 3:
    // (상태 변경)
    // i를 선택한다
    // - path에 i를 추가
    // - used[i]를 true로 변경
    path.push(i);
    used[i] = true;

    // TODO 4:
    // 다음 깊이로 재귀 호출
    // dfs(depth + 1);
    dfs(depth + 1);

    // TODO 5:
    // (상태 원복)
    // - used[i]를 false로 되돌림
    // - path에서 i 제거
    used[i] = false;
    path.pop();
  }
}

// DFS 시작
dfs(0);

// 결과 출력
console.log(output.trim());
