function solution(numbers) {
  var answer = 0;
  numbers.forEach((element) => {
    answer = answer + element;
  });
  answer = answer / numbers.length;

  return answer;
}

console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
