const fs = require("fs");
// 로컬 테스트용 (input.txt 파일 사용)
const input = fs
  .readFileSync("Baekjoon/BJ5585/input.txt")
  .toString()
  .trim()
  .split("\n");
// 백준 제출용 (표준 입력 사용)
// const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let money = 1000 - Number(input.shift());

// 1000(낸 돈) - 380(input, 물건의 값) = 620(거슬러 줘야 할 돈)
//

const coins = [500, 100, 50, 10, 5, 1];

let count = 0;

for (let i = 0; i < coins.length; i++) {
  while (money >= coins[i]) {
    money -= coins[i];
    count++;
  }
}
console.log(count);
