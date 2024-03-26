const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ17266/input.txt")
  //   .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 첫 번째 줄에 굴다리의 길이 N 이 주어진다. (1 ≤ N ≤ 100,000)
// 두 번째 줄에 가로등의 개수 M 이 주어진다. (1 ≤ M ≤ N)
// 다음 줄에 M 개의 설치할 수 있는 가로등의 위치 x 가 주어진다. (0 ≤ x ≤ N)
// 가로등의 위치 x는 오름차순으로 입력받으며 가로등의 위치는 중복되지 않으며, 정수이다.
// 가로등의 높이가 H라면 왼쪽으로 H, 오른쪽으로 H만큼 주위를 비춘다.
// 최소한의 예산이 들 높이를 구하자.

const N = Number(input.shift());
const M = Number(input.shift());
const x = input.shift().split(" ").map(Number);

console.log(N, M, x);

// 1부터 N 까지 어두운(0) 상태의 배열을 만든다.
// M 개의 갯수만큼 x(i) 위치에 가로등을 위치 시킨다.
// 가로등의 높이 H 만큼 x(i) 위치 앞 뒤로 불을 밝힌다(1)
// 배열중 어두운(0) 상태가 있다면 H를 1 증가시킨뒤 다시 확인한다.

const road = Array.from({ length: N }, () => 0);

// for (let i = 0; i < N; i++) {
//   if (x.includes(i)) {
//     road[i - 1] = 1;
//   }
// }

// console.log(road);

let H = 1;

while (road.includes(0)) {
  for (let i = 0; i < N; i++) {
    if (x.includes(i)) {
      road[i] = 1;
    }
    for (let j = 0; j < H; j++) {
      if (road[i - 1]) {
        road[i - 1 + j] = 1;
        road[i - 1 - j] = 1;
      }
    }
  }
  if (road.includes(0)) {
    H++;
  }
}
// console.log(road);
console.log(H);
