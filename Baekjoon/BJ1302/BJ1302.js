const fs = require("fs");
let input = fs
  .readFileSync("Baekjoon/BJ1302/input.txt")
  .toString()
  .trim()
  .split("\n");

let soldNumber = input.shift();

// console.log(soldNumber, input);

function findBestseller(books) {
  const count = {};
  let maxCount = 0;
  let bestsellers = [];

  books.forEach((title) => {
    count[title] = (count[title] || 0) + 1;
    if (count[title] > maxCount) {
      maxCount = count[title];
      bestsellers = [title];
    } else if (count[title] === maxCount) {
      bestsellers.push(title);
    }
  });

  bestsellers.sort();

  return bestsellers[0];
}

console.log(findBestseller(input));