const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    const item = str.charCodeAt(i);
    if (item >= 97) {
      newStr += str[i].toUpperCase();
    } else newStr += str[i].toLowerCase();
  }
  console.log(newStr);
});

// 다른 풀이
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str = input[0].split('');
//     str.forEach((value, index) => {
//         if (value === value.toUpperCase()) {
//             str[index] = value.toLowerCase();
//         } else {
//             str[index] = value.toUpperCase();
//         }
//     });
//     console.log(str.join(''));
// });
