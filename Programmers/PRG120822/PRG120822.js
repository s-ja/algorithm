function solution(my_string) {
  let arr = my_string.split("");
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  let answer = "";

  for (elem of result) {
    answer += elem;
  }

  return answer;
}

console.log(solution("jaron"));
console.log(solution("bread"));
