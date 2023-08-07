function solution(n, control) {
  for (let wsda of control) {
    switch (wsda) {
      case 'w':
        n++;
        break;
      case 's':
        n--;
        break;
      case 'd':
        n += 10;
        break;
      case 'a':
        n -= 10;
        break;
    }
  }
  return n;
}

console.log(solution(0, 'wsdawsdassw')); // -1
