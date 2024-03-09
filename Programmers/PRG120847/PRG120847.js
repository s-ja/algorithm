function solution(numbers) {
  let max = numbers[0];
  let tmp = [];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      tmp.push(max);
      max = numbers[i];
    } else {
      tmp.push(numbers[i]);
    }
  }

  let second = Math.max(...tmp);

  var answer = max * second;
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
