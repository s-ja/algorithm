const fs = require("fs");
const input = fs.readFileSync("Baekjoon/BJ1157/input.txt").toString().trim();
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// console.log(input);

// 단어를 순환 + 대문자로 변환 + 각 알파벳의 갯수를 센다.
const wordCount = {};
for (let i = 0; i < input.length; i++) {
  wordCount[input[i].toUpperCase()] = (wordCount[input[i].toUpperCase()] || 0) + 1;
}
console.log(wordCount);

// 각 알파벳의 갯수를 비교하여 가장 많은 갯수를 찾는다.
const maxCount = Math.max(...Object.values(wordCount));
console.log(maxCount);

// 가장 많은 갯수의 알파벳을 찾는다.
const maxCountLetter = []
for (let key in wordCount) {
    if (wordCount[key] === maxCount) {
        maxCountLetter.push(key);
    }
}
console.log(maxCountLetter);

// 가장 많은 알파벳이 여러 개인 경우에는 ?를 출력한다.
if (Object.values(wordCount).filter((count) => count === maxCount).length > 1) {
  console.log("?");
} else {
  console.log(maxCountLetter[0]);
}