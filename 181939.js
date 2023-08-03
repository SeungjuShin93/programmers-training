function solution(a, b) {
  const numA = Number(String(a) + String(b));
  const numB = Number(String(b) + String(a));
  return numA > numB ? numA : numB;
}
console.log(solution('9', '91'));

// 다른 풀이
// function solution(a, b) {
//   return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
// }

// 다른 풀이에 내꺼 적용
// function solution(a, b) {
//   const numA = Number(`${a}${b}`);
//   const numB = Number(`${b}${a}`);
//   return Math.max(numA, numB);
// }
// console.log(solution('9', '91'));
