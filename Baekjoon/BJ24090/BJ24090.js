const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ24090/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

// 2 5 1 4 3(i=0, j=1, A[1]과 A[1]이 교환됨) ->
// 2 5 1 4 3(i=1, j=2) ->
// 2 5 1 4 3(i=1, j=3, A[2]와 A[3]이 교환됨) ->
// 2 1 5 4 3(i=2, j=4) ->
// 2 1 5 4 3(i=2, j=5, A[3]과 A[5]가 교환됨) ->
// 2 1 3 4 5(i=0, j=1) ->
// 2 1 3 4 5(i=0, j=2, A[1]과 A[2]가 교환됨) ->
// 1 2 3 4 5(i=3, j=4, A[4]와 A[4]가 교환됨) ->
// 1 2 3 4 5(i=4, j=5) ->
// 1 2 3 4 5(최종 상태). 총 5회 교환이 발생하고 첫 번째 교환은 2와 2이다.
