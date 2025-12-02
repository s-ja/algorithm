const fs = require('fs');
const input = fs.readFileSync("Baekjoon/BJ14681/input.txt").toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [x, y] = input.map(Number);
let quadrant = 0;

if (x > 0 && y > 0) {
    quadrant = 1;
} else if (x < 0 && y > 0) {
    quadrant = 2;
} else if (x < 0 && y < 0) {
    quadrant = 3;
} else {
    quadrant = 4;
}

console.log(quadrant);