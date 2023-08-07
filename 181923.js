function solution(arr, queries) {
  const result = [];
  for (let [s, e, k] of queries) {
    let num = 1000001;
    while (s <= e) {
      if (arr[s] > k) {
        num = Math.min(num, arr[s]);
      }
      s++;
    }
    if (num === 1000001) {
      num = -1;
    }
    result.push(num);
  }
  return result;
}

// 다른 풀이
// function solution(arr, queries) {
//   return queries.map(
//     ([s, e, k]) =>
//       arr
//         .slice(s, e + 1)
//         .filter((n) => n > k)
//         .sort((a, b) => a - b)[0] || -1
//   );
// }

// 다른 풀이2
// function solution(arr, queries) {
//   return queries.map(([s, e, k]) => {
//     let result = -1;
//     for (let i = s; i <= e; i += 1) {
//       const v = arr[i];
//       if (v <= k) continue;
//       result = result === -1 ? v : Math.min(result, v);
//     }
//     return result;
//   });
// }

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
// [3, 4, -1]
