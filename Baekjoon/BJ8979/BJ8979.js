const { log } = require("console");
const fs = require("fs");
const { SourceMap } = require("module");
let input = fs
  .readFileSync(
    "/Users/seungjian/Desktop/DEV/algorythm/Baekjoon/BJ8979/input.txt"
  )
  .toString()
  .trim();
input = input.split("\n");

const key = input.shift();

// 인자로 주어지는 총 국가의 수
const countrys = key.split(" ")[0];
// 순위를 구하고자 하는 국가 번호
const countryNumber = key.split(" ")[1];

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

country = country.sort((a, b) => {
  return a.arr[0] - b.arr[0];
});

country = country.sort((a, b) => {
  return a.arr[1] - b.arr[1];
});

country = country.sort((a, b) => {
  return a.arr[2] - b.arr[2];
});

function numberFind(countries) {
  return countries.number === countryNumber;
}

// console.log(country.indexOf(country.find(numberFind)));

console.log(country);
