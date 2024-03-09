function solution(array, n) {
  let answer = 0;

  for (elem of array) {
    if (elem === n) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
console.log(solution([0, 2, 3, 4], 1));
