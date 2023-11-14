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

// 1. 오늘 판매된 책들 중 2권 이상 팔린 책들의 목록을 만든다.
// 2. 오늘 판매된 책들 중 2권 이상 팔린 책의 목록 안에 있는 책들의 판매 갯수를 산출한다.
// 3. 판매된 갯수가 동일하다면 사전순으로 정렬하여 가장 앞에 있는 책을 반환한다.

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

let test2 = {};

input.forEach((book) => {
  test2[book] = (test2[book] || 0) + 1;
});

// console.log(test2);

// console.log(test);

// for (i in test2) {
//   console.log(test2[i]);
// }

let testFirst = test[0];

for (let k = 0; k < test.length; k++) {
  if (!test[k + 1]) {
    break;
  } else if (test[k].count < test[k + 1].count) {
    testFirst = test[k + 1];
  } else if (test[k].count === test[k + 1].count) {
    if (test[k].title < test[k + 1].title) {
      testFirst = test[k];
    }
  }
}

// console.log(testFirst.title);

// const bookCounts = {};

// input.forEach((book) => {
//   bookCounts[book] = (bookCounts[book] || 0) + 1;
// });

// const sortedBooks = Object.keys(bookCounts).sort((a, b) => {
//   if (bookCounts[b] === bookCounts[a]) {
//     return a.localeCompare(b);
//   }
//   return bookCounts[b] - bookCounts[a];
// });

// console.log(sortedBooks[0]);
