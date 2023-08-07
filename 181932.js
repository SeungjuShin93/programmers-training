function solution(code) {
  let ret = '';
  let mode = 0;
  for (let idx = 0; idx < code.length; idx++) {
    switch (mode) {
      case 0:
        if (code[idx] !== '1') {
          if (idx % 2 === 0) {
            ret += code[idx];
          }
        } else {
          mode = 1;
        }
        break;
      case 1:
        if (code[idx] !== '1') {
          if (idx % 2 === 1) {
            ret += code[idx];
          }
        } else {
          mode = 0;
        }
        break;
    }
  }
  return ret !== '' ? ret : 'EMPTY';
}
console.log(solution('abc1abc1abc'));
