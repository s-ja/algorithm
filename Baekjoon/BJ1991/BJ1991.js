/**
 * 문제 번호: BJ1991
 * 문제 링크: https://www.acmicpc.net/problem/1991
 */

const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("BJ1991/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);

const tree = {};

for (let i = 1; i <= N; i++) {
  const [p, l, r] = input[i].trim().split(" ");
  tree[p] = [l, r];
}

// console.log(tree)

let pre = "";
function preorder(node) {
  if (node === ".") return;

  pre += node; // ✅ "도착하자마자 출력"이라 전위
  const [l, r] = tree[node];
  preorder(l);
  preorder(r);
}

let ino = "";
function inorder(node) {
  if (node === ".") return;

  const [l, r] = tree[node];
  inorder(l);
  ino += node; // ✅ "왼쪽 끝까지 보고 나서 출력"이라 중위
  inorder(r);
}

let post = "";
function postorder(node) {
  if (node === ".") return;

  const [l, r] = tree[node];
  postorder(l);
  postorder(r);
  post += node; // ✅ "자식 둘 다 끝난 뒤 출력"이라 후위
}

preorder("A");
inorder("A");
postorder("A");

console.log(pre);
console.log(ino);
console.log(post);