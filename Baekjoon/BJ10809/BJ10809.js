// fs 모듈을 불러옵니다.
const fs = require('fs');

// 표준 입력을 읽고 문자열로 변환합니다.
const input = fs.readFileSync('Baekjoon/BJ10809/input.txt').toString().trim();
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const result = [];

// 알파벳 소문자의 아스키 코드 값은 a(97)부터 z(122)까지.
for(let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));