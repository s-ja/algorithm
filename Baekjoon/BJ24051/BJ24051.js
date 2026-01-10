const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ24051/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let count = 0;

const recordStore = (storedValue) => {
  count++;
  // console.log(`store #${count}: ${storedValue}`, arr);

  if (count === K) {
    console.log(storedValue);
    process.exit(0);
  }
};

for (let i = 1; i < N; i++) {
  const key = arr[i];
  let j = i - 1;

  while (j >= 0 && arr[j] > key) {
    // shift: arr[j] 값을 한 칸 오른쪽에 저장
    arr[j + 1] = arr[j];
    recordStore(arr[j + 1]);
    j--; // 다음 비교를 위해 왼쪽으로 이동
  }

  // key 삽입: 실제로 위치가 바뀐 경우에만 "저장"으로 카운트
  if (j + 1 !== i) {
    arr[j + 1] = key;
    recordStore(key);
  }
}

// 끝까지 K번째 저장이 없으면 -1
console.log(-1);
