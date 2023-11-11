function solution(n, k) {
  var answer = 0;
  let a = n.toString();
  a = Array.from(a);
  a = a.slice(0, -1);

  if (a.length === 3) {
    let first = Number(a[0]) * 1000;
    let second = Number(a[1]) * 100;
    let third = Number(a[2]) * 10;
    a = first + second + third;
  } else if (a.length === 2) {
    let first = Number(a[0]) * 100;
    let second = Number(a[1]) * 10;
    a = first + second;
  } else if (a.length === 1) {
    let first = Number(a[0]) * 10;
    a = first;
  }
  let cola = a / 10;
  k = k - cola;
  answer = n * 12000 + k * 2000;
  return answer;
}

console.log(solution(1, 3));
