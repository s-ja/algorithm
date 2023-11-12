const { log } = require("console");
const fs = require("fs");
const { SourceMap } = require("module");
let input = fs
  .readFileSync("Baekjoon/BJ8979/input.txt")
  .toString()
  .trim()
  .split("\n");

const key = input.shift();

// 인자로 주어지는 총 국가의 수
const countries = Number(key.split(" ")[0]);
// 순위를 구하고자 하는 국가 번호
const countryNumber = Number(key.split(" ")[1]);

//국가 번호와 매달 획득 수 구분 없이 들어있는 배열
const numberAndMedals = [];

for (let index = 0; index < input.length; index++) {
  const element = input[index].split(" ");
  numberAndMedals.push(element);
}

let country = [];

function countryConverter(x) {
  for (let index = 0; index < x.length; index++) {
    const numberAndMedal = {
      number: x[index].shift(),
      arr: x[index],
    };
    country.push(numberAndMedal);
  }
}

countryConverter(numberAndMedals);

country.sort((a, b) => {
  if (a.arr[0] !== b.arr[0]) return b.arr[0] - a.arr[0]; // 금메달 수 비교
  if (a.arr[1] !== b.arr[1]) return b.arr[1] - a.arr[1]; // 은메달 수 비교
  return b.arr[2] - a.arr[2]; // 동메달 수 비교
});

function numberFind(countries) {
  return countries.number === countryNumber;
}

console.log(country.indexOf(country.find(numberFind)));

console.log(country);
