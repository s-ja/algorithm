/**
 * 문제 번호: BJ1539
 * 문제 링크: https://www.acmicpc.net/problem/1539
 *
 * 핵심:
 * - BST에 값을 순서대로 삽입할 때, 각 삽입에서 방문(비교)한 노드 수 = depth + 1
 * - depth[x] = max(depth[predecessor], depth[successor]) + 1
 *   (없으면 -1로 취급)
 * - JS에는 ordered set이 없으므로, Treap(균형 BST)로 pred/succ를 O(logN) 기대시간에 구함.
 */

const fs = require("fs");

const input = fs.readFileSync("Baekjoon/BJ1539/input.txt").toString().trim();

// ✅ 백준 제출용
// const input = fs.readFileSync(0, "utf8").trim();

if (input.length === 0) process.exit(0);

const data = data.split(/\s+/).map(Number);

const N = input[0];

// -----------------------------
// Fast RNG (xorshift32)
// -----------------------------
let seed = 123456789;
function rand32() {
  // xorshift32
  seed ^= seed << 13;
  seed ^= seed >>> 17;
  seed ^= seed << 5;
  return seed | 0;
}

// -----------------------------
// Treap Node
// -----------------------------
class Node {
  constructor(key, depth) {
    this.key = key;
    this.depth = depth;
    this.prio = rand32();
    this.left = null;
    this.right = null;
  }
}

function rotateRight(p) {
  const q = p.left;
  p.left = q.right;
  q.right = p;
  return q;
}

function rotateLeft(p) {
  const q = p.right;
  p.right = q.left;
  q.left = p;
  return q;
}

// BST insert + heap priority balancing
function insert(root, node) {
  if (!root) return node;

  if (node.key < root.key) {
    root.left = insert(root.left, node);
    if (root.left.prio > root.prio) root = rotateRight(root);
  } else {
    root.right = insert(root.right, node);
    if (root.right.prio > root.prio) root = rotateLeft(root);
  }

  return root;
}

// predecessor: 가장 큰 key < x
function predecessor(root, x) {
  let cur = root;
  let pred = null;
  while (cur) {
    if (x <= cur.key) {
      cur = cur.left;
    } else {
      pred = cur;
      cur = cur.right;
    }
  }
  return pred;
}

// successor: 가장 작은 key > x
function successor(root, x) {
  let cur = root;
  let succ = null;
  while (cur) {
    if (x >= cur.key) {
      cur = cur.right;
    } else {
      succ = cur;
      cur = cur.left;
    }
  }
  return succ;
}

// -----------------------------
// Main
// -----------------------------
let root = null;
let ans = 0n;

for (let i = 1; i <= N; i++) {
  const x = input[i];

  // pred/succ는 "삽입 전" 트리에서 찾는다.
  const pred = predecessor(root, x);
  const succ = successor(root, x);

  const predDepth = pred ? pred.depth : -1;
  const succDepth = succ ? succ.depth : -1;

  const depth = Math.max(predDepth, succDepth) + 1;
  ans += BigInt(depth + 1); // 방문 노드 수 = depth + 1

  root = insert(root, new Node(x, depth));
}

console.log(ans.toString());
