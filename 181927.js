function solution(num_list) {
  const arr = [...num_list];
  const lastIndext = num_list.length - 1;
  if (num_list[lastIndext] > num_list[lastIndext - 1]) {
    arr.push(num_list[lastIndext] - num_list[lastIndext - 1]);
  } else {
    arr.push(num_list[lastIndext] * 2);
  }
  return arr;
}

console.log(solution([2, 1, 6])); // [2, 1, 6, 5]
console.log(solution([5, 2, 1, 7, 5])); // 5, 2, 1, 7, 5, 10]

// 다른 풀이
// function solution(num_list) {
//   const [a, b] = [...num_list].reverse();
//   return [...num_list, a > b ? (a-b):a*2];
// }
