function solution(a, b) {
  const numA = Number(String(a) + String(b));
  const numB = 2 * a * b;
  return numA >= numB ? numA : numB;
}
console.log(solution('2', '91'));
