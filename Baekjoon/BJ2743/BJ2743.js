// fs 모듈을 불러옵니다.
const fs = require('fs');

// 표준 입력을 읽고 문자열로 변환합니다.
// `split(' ')`으로 공백으로 구분된 배열을 만듭니다.
// const input = fs.readFileSync('Baekjoon/BJ2743/input.txt').toString();
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(input.length);