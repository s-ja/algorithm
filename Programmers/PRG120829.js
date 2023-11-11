function solution(angle) {
  let result;
  if (angle == 90) {
    result = 2;
  } else if (angle == 180) {
    result = 4;
  } else if (angle < 90) {
    result = 1;
  } else if (angle > 90) {
    result = 3;
  }
  return result;
  var answer = result;
  return answer;
}
