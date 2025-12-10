const fs = require("fs");
const input = fs
  .readFileSync("Baekjoon/BJ1316/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dataLength = Number(input.shift());
const data = input;

// 그룹 단어 = 이미 등장한 문자가 연속해서 이어지는 것은 상관 없으나, 한번 끊긴 이후 다시 등장하면 그룹 단어가 x
// a 바로 뒤에 a 가 다시 나오는 것은 상관 없다, a 바로 뒤에 b (다른 문자)가 나오는 것도 상관 없다, 하지만 다른 문자가 한 번 나온 뒤, 같은 문자가 또 나오면 안된다.

// 각 단어를 모든 문자로 나눠 배열로 저장

// const indexOfLetter = {
// "a": [1,2,3,5],
// "b" : [4]
// }

let count = 0;

for (let i = 0; i < dataLength; i++) {
  const word = data[i];
  const indexOfLetter = {};
  const wordArray = word.split("");
  let isGroupWord = true;
  for (let j = 0; j < wordArray.length; j++) {
    if (!indexOfLetter[wordArray[j]]) {
      indexOfLetter[wordArray[j]] = [];
    }
    indexOfLetter[wordArray[j]].push(j + 1);
  }
  // console.log(indexOfLetter);
  for (const indexes of Object.values(indexOfLetter)) {
    let continued = false;
    if (indexes.length > 1) {
      for (let k = 0; k < indexes.length - 1; k++) {
        if (indexes[k] + 1 !== indexes[k + 1]) {
          continued = false;
          break;
        } else {
          continued = true;
        }
      }
    } else {
      continued = true;
    }

    if (!continued) {
      isGroupWord = false;
      break;
    }
  }
  if (isGroupWord) {
    count++;
  }
}

console.log(count);
