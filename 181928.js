function solution(num_list) {
  let odd = '';
  let even = '';
  for (let value of num_list) {
    if (value % 2 === 1) {
      odd += value;
    } else {
      even += value;
    }
  }
  return Number(odd) + Number(even);
}
console.log(solution([3, 4, 5, 2, 1]));
