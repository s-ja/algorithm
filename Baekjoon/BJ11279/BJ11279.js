/**
 * 문제 번호: BJ11279
 * 문제 링크: https://www.acmicpc.net/problem/11279
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ11279/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

class MaxHeap {
  constructor() {
    this.arr = [];
  }

  push(x) {
    const a = this.arr;
    a.push(x);

    let i = a.length - 1;
    console.log("[push start]", { x, a: [...a], i });

    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      console.log("  [compare]", { i, p, parent: a[p], child: a[i] });

      if (a[p] >= a[i]) {
        console.log("  [stop] parent >= child");
        break;
      }

      [a[p], a[i]] = [a[i], a[p]];
      console.log("  [swap]", { a: [...a] });

      i = p;
      console.log("  [move up]", { i });
    }

    console.log("[push end]", { a: [...a] });
  }

  pop() {
    const a = this.arr;
    const n = a.length;
    if (n === 0) return 0;
    if (n === 1) return a.pop();

    const top = a[0];
    a[0] = a.pop();

    let i = 0;
    while (true) {
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      let largest = i;

      if (l < a.length && a[l] > a[largest]) largest = l;
      if (r < a.length && a[r] > a[largest]) largest = r;

      if (largest === i) break;
      [a[i], a[largest]] = [a[largest], a[i]];
      i = largest;
    }

    return top;
  }
}

const heap = new MaxHeap();
const result = [];

for (let i = 0; i < N; i++) {
  const x = numbers[i];
  if (x === 0) result.push(heap.pop());
  else heap.push(x);
}

console.log(result.join("\n"));
