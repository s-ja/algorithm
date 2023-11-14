const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ4821/input.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

function converter(input) {
  const arr = [];
  for (let i = 0; i < input.length; i += 2) {
    const key = Number(input[i]);
    if (input[i + 1]) {
      const value = input[i + 1].split(",");
      arr.push({ key, value });
    }
  }
  return arr;
}

const data = converter(input);

/*[
  { key: 30, value: ["10-15", "25-28", "8-4", "13-20", "9", "8-8"] },
  { key: 19, value: ["10-15", "25-28", "8-4", "13-20", "9", "8-8"] },
]*/

for (let index = 0; index < data.length; index++) {
  let book = [];

  for (let i = 1; i < data[index].key + 1; i++) {
    book.push(i);
  }

  //   console.log(book);

  let printRange = [];

  for (let j = 0; j < data[index].value.length; j++) {
    [first, second] = data[index].value[j].split("-");
    first = Number(first);
    second = Number(second);
    if (!second) {
      second = 0;
    } else if (first === second) {
      second = 0;
    } else if (second - first < 0) {
      first = 0;
      second = 0;
    }
    //   console.log(first, second);
    let partial = [];
    for (let k = 0; k < second - first + 1; k++) {
      partial.push(first + k);
    }
    if (!partial[0]) {
      partial[0] = first;
    }
    printRange.push(...partial);
  }

  let uniqueArr = [];
  printRange.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });

  uniqueArr.sort((a, b) => a - b);
  let intersection = book.filter((x) => uniqueArr.includes(x));
  console.log(intersection.length);
}
