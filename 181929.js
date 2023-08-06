function solution(num_list) {
  let sum = 0;
  let mutiply = 1;
  for (let index of num_list) {
    sum += index;
    mutiply *= index;
  }
  return mutiply < sum ** 2 ? 1 : 0;
}
console.log(solution([3, 4, 5, 2, 1]));
