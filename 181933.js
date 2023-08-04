function solution(a, b, flag) {
  return flag === true ? a + b : a - b;
}
console.log(solution(-4, 7, true));

// 다른 풀이
// function solution(a, b, flag) {
//   return (flag)? a+b : a-b;
// }
