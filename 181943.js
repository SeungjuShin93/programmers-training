function solution(my_string, overwrite_string, s) {
  const arr = [...my_string];
  for (let i = s; i < overwrite_string.length + s; i++) {
    arr[i] = overwrite_string[i - s];
  }
  return arr.join('');
}

console.log(solution('He11oWor1d', 'lloWorl', 2));
console.log(solution('Program29b8UYP', 'merS123', 7));

// 다른 풀이
// function solution(my_string, overwrite_string, s) {
//     const front = my_string.slice(0, s);
//     const back = my_string.slice(s + overwrite_string.length, my_string.length);
//     const answer = front + overwrite_string + back;
//     return answer;
// }
