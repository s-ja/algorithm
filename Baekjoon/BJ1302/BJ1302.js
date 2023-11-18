const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1302/input.txt")
  .toString()
  .trim()
  .split("\n");

let soldNumber = input.shift();

// console.log(soldNumber);

// console.log(input);

let moreThan2 = input.filter((item, index) => input.indexOf(item) !== index);

// console.log(moreThan2);

let uniqueArr = [];

moreThan2.forEach((element) => {
  if (!uniqueArr.includes(element)) {
    uniqueArr.push(element);
  }
});

// console.log(uniqueArr);

// 1. 오늘 판매된 책들 중 2권 이상 팔린 책들의 목록을 만든다(N).
// 2. N 목록 안에 있는 책들의 판매 갯수를 산출한다(K).
// 3. K에서 가장 높은 수를 뽑는다(L).
// 4. K에서 L 판매 갯수만큼 판매된 책의 목록을 만든다(J).
// 5. J를 알파벳 오름 차순으로 정렬, 첫번째 요소를 반환한다.

let test = [];
for (let j = 0; j < uniqueArr.length; j++) {
  const testCase = {
    title: uniqueArr[j],
    count: 0,
  };
  for (let i = 0; i < input.length; i++) {
    if (input[i] === uniqueArr[j]) {
      testCase.count++;
    }
  }
  test.push(testCase);
}

test.push(0);
console.log(test);

let bestNumber = 0;

for (let i = 0; i < test.length; i++) {
  if (test[i] !== 0) {
    if (test[i].count > test[i + 1].count) {
      bestNumber = test[i].count;
    }
  }
}

console.log(bestNumber);
