function solution(a, b, c) {
  const sum = a + b + c;
  const doubleSum = sum * (a ** 2 + b ** 2 + c ** 2);
  const tripleSum = doubleSum * (a ** 3 + b ** 3 + c ** 3);
  if (a !== b && b !== c) {
    return sum;
  } else if (a === b && b === c && c === a) {
    return tripleSum;
  } else {
    return doubleSum;
  }
}
console.log(solution(4, 4, 4));

// 다른 풀이
// const solution = (a, b, c) => {
//   const set = new Set([a, b, c]);
//   switch ([...set].length) {
//     case 1:
//       return calculate([a, b, c], 3);
//     case 2:
//       return calculate([a, b, c], 2);
//     case 3:
//       return calculate([a, b, c], 1);
//   }
// };
// const calculate = (inc, n) => {
//   const [a, b, c] = inc;
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
//   }

//   return result;
// };
