function solution(a, d, included) {
  let result = 0;
  const arr = [];
  let cnt = 0;
  for (let i = a; cnt < included.length; i += d) {
    arr.push(i);
    cnt++;
  }
  for (let i = 0; i < included.length; i++) {
    const item = included[i];
    if (item === true) {
      result += arr[i];
    }
  }
  return result;
}

console.log(solution(3, 4, [true, false, false, true, true])); // 37

// 다른 풀이
// function solution(a, d, included) {
//     let sum = 0;
//     let current = a;
//     for(let i = 0 ; i < included.length ;i++){
//         if(included[i]) sum+= current;
//         current+=d;
//     }
//     return sum
// }

// 다른 풀이2
// function solution(a, d, included) {
//   return included.reduce((acc, flag, i) => {
//       return flag ? acc + a + d * i : acc
//   }, 0)
// }
