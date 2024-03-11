function solution(array, height) {
  var answer = 0;

    for (elem of array) {
        if (elem > height) {
          answer++
      }
  }

  return answer;
}


console.log(solution([149, 180, 192, 170], 167));
console.log(solution([180, 120, 140], 190));