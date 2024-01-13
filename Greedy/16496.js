const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const answer = input[1]
  .split(' ')
  .sort((a, b) => Number(b + a) - Number(a + b))
  .join('')

console.log(answer[0] !== '0' ? answer : '0')
