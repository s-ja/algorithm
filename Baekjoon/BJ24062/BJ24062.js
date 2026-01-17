const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ24062/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let found = false;

function checkIfEqual(A) {
  for (let i = 0; i < N; i++) {
    if (A[i] !== B[i]) return;
  }
  found = true;
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
  let t = 0;
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
  t = 0;
  while (i <= r) {
    A[i++] = tmp[t++];
    checkIfEqual(A);
  }

  if (found) {
  console.log(1);
  process.exit(0);
}
}

merge_sort(A, 0, N - 1);
console.log(0)