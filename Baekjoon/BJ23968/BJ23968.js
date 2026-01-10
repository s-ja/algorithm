const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ23968/input.txt")
  .toString()
  .trim()
  .split("\n");
//const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const numbers = input.shift().split(" ").map(Number);

// N 정렬해야 하는 숫자의 갯수
// K 번째 정렬을 완료했을 때 뒤바뀐 두 숫자를 출력해야 함

let result = null; // 뒤바뀐 두 숫자를 출력하기 위함
let sorted = false; // 정렬이 완료되었는지 확인하는 스위치
let count = 0; // 몇 번의 교체가 진행됐는지 기록

while (!sorted) {
  let changedCount = 0; // for문 안에서 몇 번의 교체가 진행 됐는지 기록
  let lastChanged = []; // 마지막으로 교체된 두 숫자를 반복문 밖으로 꺼내기 위함
  for (let i = 0; i < N - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
      changedCount++;
      lastChanged = [numbers[i], numbers[i + 1]];
      count += changedCount;

      if (count === K) {
        // 입력으로 주어진 K 번째 교체에 도달 시, 마지막으로 교체한 두 숫자를 result에 저장 후 반복문 종료
        result = lastChanged.sort((a, b) => a - b).join(" "); // 작은 수 부터 출력해야 함
        break;
      }
    }
  }

  // count += changedCount; // 배열 모든 인자를 한 번 모두 훑을 때마다 반복문 안에서 몇 번의 교체가 진행됐는지 기록
  // if (count === K) {
  //   // 입력으로 주어진 K 번째 교체에 도달 시, 마지막으로 교체한 두 숫자를 result에 저장 후 반복문 종료
  //   result = lastChanged.sort((a, b) => a - b).join(" "); // 작은 수 부터 출력해야 함
  //   break;
  // }
  if (changedCount === 0) {
    // while문 안에서 선언된 for문 내부 교체 횟수가 0이면 정렬이 완료된 것으로 간주
    sorted = true; // while문 종료를 위한 스위치 전환
  }
}

if (result === null) {
  console.log("-1");
} else {
  console.log(result);
}
