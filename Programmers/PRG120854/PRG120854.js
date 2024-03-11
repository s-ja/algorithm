function solution(strlist) {
  let answer = [];
  for (elem of strlist) {
    let arr = elem.split("");
    answer.push(arr.length);
  }

  return answer;
}

console.log(solution(["We", "are", "the", "world!"]));
console.log(solution(["I", "Love", "Programmers."]));
