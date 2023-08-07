function solution(numLog) {
  let str = '';
  for (let i = 1; i < numLog.length; i++) {
    const wsda = Number(numLog[i]) - Number(numLog[i - 1]);
    switch (wsda) {
      case 1:
        str += 'w';
        break;
      case -1:
        str += 's';
        break;
      case 10:
        str += 'd';
        break;
      case -10:
        str += 'a';
        break;
    }
  }
  return str;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // "wsdawsdassw"

// 다른 풀이
// function solution(numLog) {
//   const convert = {
//       '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//   };
//   return numLog.slice(1).map((v, i) => {
//       return convert[v - numLog[i]]
//   }).join('')
// }
