const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim();

const base26 = (value) => value.charCodeAt() - 'A'.charCodeAt() + 1;

console.log(
  input
    .split('')
    .reverse()
    .reduce((acc, value, idx) => acc + 26 ** idx * base26(value), 0)
);
