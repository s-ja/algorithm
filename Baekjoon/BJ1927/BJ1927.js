/**
 * 문제 번호: BJ1927
 * 문제 링크: https://www.acmicpc.net/problem/1927
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ1927/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

class MinHeap {
  constructor() {
    this.arr = [];
  }

  push(value) {
    const arr = this.arr;
    arr.push(value);

    let index = arr.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (arr[parentIndex] <= arr[index]) break;

      [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];

      index = parentIndex;
    }
  }

  pop() {
    const arr = this.arr;
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr.pop();

    const top = arr[0];
    arr[0] = arr.pop();

    let index = 0;
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let smallest = index;

      if (leftIndex < arr.length && arr[leftIndex] < arr[smallest])
        smallest = leftIndex;
      if (rightIndex < arr.length && arr[rightIndex] < arr[smallest])
        smallest = rightIndex;

      if (smallest === index) break;
      [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
      index = smallest;
    }

    return top;
  }
}

const heap = new MinHeap();
const result = [];

for (let i = 0; i < N; i++) {
  const x = numbers[i];
  if (x === 0) result.push(heap.pop());
  else heap.push(x);
}

console.log(result.join("\n"));
