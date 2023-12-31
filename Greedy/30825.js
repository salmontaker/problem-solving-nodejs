const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, K] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)
const B = A.map((value, index) => value - index * K)
const M = Math.max(...B)

let answer = 0
B.forEach((value) => {
  answer += M - value
})

console.log(answer)
