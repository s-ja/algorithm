const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ24060/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const A = input.shift().split(" ").map(Number);

let count = 0;
let answer = -1;
let found = false;

function storeValue(val) {
  count++;
  // console.log(count, val);
  if (count === K) {
    answer = val; // 또는 즉시 출력/종료
    found = true;
    console.log(answer);
    process.exit(0);
  }
}

function merge_sort(A, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let i = p;
  let j = q + 1;
  let t = 1;
  const tmp = [];
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }
  while (i <= q) {
    tmp[t++] = A[i++];
  }
  while (j <= r) {
    tmp[t++] = A[j++];
  }
  i = p;
  t = 1;
  while (i <= r) {
    storeValue(tmp[t]);
    A[i++] = tmp[t++];
  }
}

merge_sort(A, 0, N - 1);
console.log(answer);
