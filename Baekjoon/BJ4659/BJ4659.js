const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ4659/input.txt")
  .toString()
  .trim()
  .split("\n");

const end = input.pop();
// console.log(input);

// 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
// 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
// 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.

// "a", "e", "i", "o", "u" 를 포함하지 않는 문자열을 거른다.
// 같은 글자가 연속적으로 두번 오는 경우를 거른다.
// "ee", "oo" 는 허용한다.

function isAcceptable(password) {
  let hasVowel = false; // 모음 포함 여부
  let consecutiveVowel = 0; // 연속 모음 수
  let consecutiveConsonant = 0; // 연속 자음 수
  let prevChar = "";

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    const isVowel = "aeiou".includes(char);

    // 모음 확인
    if (isVowel) {
      hasVowel = true;
      consecutiveVowel++;
      consecutiveConsonant = 0;
    } else {
      consecutiveConsonant++;
      consecutiveVowel = 0;
    }

    // 같은 글자가 연속되는지, "ee"와 "oo"인 경우는 허용
    if (char === prevChar && char !== "e" && char !== "o") return false;

    // 연속된 모음 또는 자음이 3개인 경우
    if (consecutiveVowel === 3 || consecutiveConsonant === 3) return false;

    prevChar = char;
  }

  return hasVowel;
}

function solution(input) {
  for (const password of input) {
    if (password === "end") break;
    const result = isAcceptable(password)
      ? "is acceptable."
      : "is not acceptable.";
    console.log(`<${password}> ${result}`);
  }
}

solution(input);
