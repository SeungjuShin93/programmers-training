function solution(arr, queries) {
  for (let [x, y] of queries) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
  return arr;
}

// 다른 풀이
// function solution(arr, queries) {
//   queries.forEach(([a, b]) => {
//     [arr[a], arr[b]] = [arr[b], arr[a]];
//   });
//   return arr;
// }

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
); // [3, 4, 1, 0, 2]
