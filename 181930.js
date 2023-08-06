function solution(a, b, c) {
  const sum = a + b + c;
  const doubleSum = sum * (a ** 2 + b ** 2 + c ** 2);
  const tripleSum = doubleSum * (a ** 3 + b ** 3 + c ** 3);
  if (a !== b && b !== c && c !== a) {
    return sum;
  } else if (a === b && b === c && c === a) {
    return tripleSum;
  } else {
    return doubleSum;
  }
}
console.log(solution(4, 4, 4));
