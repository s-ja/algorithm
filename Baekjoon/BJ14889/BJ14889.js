const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ14889/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input.shift());
const S = input.map((line) => line.split(" ").map(Number));

// ===========================================
// 14889 스타트와 링크 - 백트래킹(조합) 풀이 뼈대
// 핵심 아이디어:
// - "스타트 팀"에 N/2명을 뽑는 모든 조합을 만든다 (순서 없는 선택)
// - 조합 중복 방지는 startIndex(다음 후보 시작점)로 해결한다
// - selected[i] = true면 i번 선수는 스타트 팀, false면 링크 팀
// - 조합이 완성될 때(뽑은 인원 === N/2) 두 팀 점수를 계산하고 최소 차이를 갱신한다
// ===========================================

// 상태(state)
const selected = Array(N).fill(false);

// 답(최소 차이)
let minDiff = Infinity;

// TODO A) 팀 점수 계산 함수 만들기
// - selected 배열을 기준으로 스타트 팀 점수, 링크 팀 점수를 계산한다
// - 점수 계산은 보통 i<j만 돌면서 같은 팀이면 (S[i][j] + S[j][i])를 더한다
// - return Math.abs(startScore - linkScore)
function calcDiff() {
  // TODO: 구현
  let startScore = 0;
  let linkScore = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (selected[i] && selected[j]) {
        startScore += S[i][j];
      }
      if (!selected[i] && !selected[j]) {
        linkScore += S[i][j];
      }
    }
  }
  // console.log("startScore", startScore);
  // console.log("linkScore", linkScore);
  // console.log(
  //   "Math.abs(startScore - linkScore)",
  //   Math.abs(startScore - linkScore)
  // );
  return Math.abs(startScore - linkScore);
}

// DFS(조합) - 스타트 팀에 사람을 채워 넣는다
// startIndex: 다음에 선택할 후보의 시작 인덱스 (중복 방지 핵심)
// count: 현재까지 스타트 팀에 뽑힌 인원 수
function dfs(startIndex, count) {
  if (count === N / 2) {
    console.log("selected", selected);
  }
  // TODO B) 종료 조건
  // count === N/2 이면
  // - calcDiff()로 차이를 계산
  // - minDiff 갱신
  // - return
  if (count === N / 2) {
    const diff = calcDiff();
    // console.log("diff", diff);
    minDiff = Math.min(minDiff, diff);
    // console.log("minDiff", minDiff);
    return;
  }
  // TODO C) 조합 생성(중복 없이)
  // i를 startIndex부터 N-1까지 순회하면서,
  // - selected[i] = true로 선택(상태 변경)
  // - dfs(i + 1, count + 1) 재귀 호출 (i+1이 핵심: 증가 방향 선택 => 중복 방지)
  // - selected[i] = false로 되돌림(상태 원복)
  for (let i = startIndex; i < N; i++) {
    selected[i] = true;
    dfs(i + 1, count + 1);
    selected[i] = false;
  }
}

// TODO D) 중복을 절반으로 줄이는 트릭(선택):
// - 0번 선수를 스타트 팀에 고정하면 (A vs B)와 (B vs A) 대칭 중복을 제거할 수 있다.
// - 구현한다면: selected[0]=true; dfs(1,1); 로 시작
// - 구현하지 않아도 정답은 나오지만, 경우의 수가 2배가 된다.

dfs(0, 0);

// 결과 출력
console.log(minDiff);
