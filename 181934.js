function solution(ineq, eq, n, m) {
  if (eq === '=') {
    if (ineq === '<') {
      return n <= m ? 1 : 0;
    } else {
      return n >= m ? 1 : 0;
    }
  } else {
    if (ineq === '<') {
      return n < m ? 1 : 0;
    } else {
      return n > m ? 1 : 0;
    }
  }
}
console.log(solution('<', '=', 20, 50));
console.log(solution('>', '!', 41, 78));

// 다른 풀이
// const operations = {
//   '>=': (n, m) => n >= m,
//   '<=': (n, m) => n <= m,
//   '>!': (n, m) => n > m,
//   '<!': (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }

// 다른 풀이2
// function solution(ineq, eq, n, m) {
//   if (eq === '=' && n === m) return 1
//   if (ineq === '<' && n < m) return 1
//   if (ineq === '>' && n > m) return 1
//   return 0
// }
