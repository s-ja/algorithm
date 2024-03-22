const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1244/input.txt")
  //   .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//첫째 줄에는 스위치 개수가 주어진다. 스위치 개수는 100 이하인 양의 정수이다.
//둘째 줄에는 각 스위치의 상태가 주어진다. 켜져 있으면 1, 꺼져있으면 0이라고 표시하고 사이에 빈칸이 하나씩 있다.
//셋째 줄에는 학생수가 주어진다. 학생수는 100 이하인 양의 정수이다.
//넷째 줄부터 마지막 줄까지 한 줄에 한 학생의 성별, 학생이 받은 수가 주어진다.
//남학생은 1로, 여학생은 2로 표시하고,
//학생이 받은 수는 스위치 개수 이하인 양의 정수이다.

const bulbNumber = Number(input.shift());
const bulbs = input.shift().split(" ").map(Number);
const studentNumber = Number(input.shift());

// console.log(bulbNumber);
// console.log(bulbs);
// console.log(studentNumber);

for (let i = 0; i < studentNumber; i++) {
  let [student, number] = input[i].split(" ").map(Number);
  if (student === 1) {
    let check = number - 1;
    while (check < bulbNumber) {
      if (bulbs[check] === 1) {
        bulbs[check] = 0;
      } else {
        bulbs[check] = 1;
      }
      check = check + number;
    }
  } else {
    let check = 0;
    while (check < number) {
      if (bulbs[number - 2 - check] === bulbs[number + check]) {
        if (bulbs[number - 2 - check] === 1) {
          bulbs[number - 2 - check] = 0;
          bulbs[number + check] = 0;
          //   console.log("1 " + bulbs);
        } else {
          bulbs[number - 2 - check] = 1;
          bulbs[number + check] = 1;
          //   console.log("2 " + bulbs);
        }
        // console.log(bulbs[number - 2 - check]);
        // console.log(bulbs[number + 1 + check]);
      } else {
        if (bulbs[number - 1] === 0) {
          bulbs[number - 1] = 1;
        } else {
          bulbs[number - 1] = 0;
        }
        break;
      }
      check++;
      //   console.log("check " + check);
    }
  }
}

let cnt = 0;
let result = "";

for (let j = 0; j < bulbs.length; j++) {
  result += bulbs[j] + " ";
  cnt++;
  if (cnt === 20) {
    console.log(result);
    result = "";
    cnt = 0;
  }
}

console.log(result);
