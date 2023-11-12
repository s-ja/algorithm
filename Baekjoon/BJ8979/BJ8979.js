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
// 순의를 구하고자 하는 국가 번호
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
      score: 0,
    };
    country.push(numberAndMedal);
  }
}

countryConverter(numberAndMedals);

for (let index = 0; index < country.length; index++) {
  const countriesScore =
    country[index].arr[0] * 3 +
    country[index].arr[1] * 2 +
    country[index].arr[2] * 1;
  country[index].score = countriesScore;
}

// 각 국가의 번호와 매달 획득 갯수 마지막으로 점수를 담은 객체
// console.log(country);

// for (let index = 0; index < country.length; index++) {
//   if (country[index].score > country[index + 1].score) {
//     [country[index], country[index + 1]] = [country[index + 1], country[index]];
//   }
// }
country = country.sort((a, b) => {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  if (a.score === b.score) return 0;
});

function numberFind(countries) {
  return countries.number === countryNumber;
}

console.log(country.indexOf(country.find(numberFind)));
