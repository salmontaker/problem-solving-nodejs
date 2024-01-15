const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [K, N] = input[0].split(' ').map(Number)
const A = input.slice(1)
const MAX = Math.max(...A.map(Number)).toString()

for (let i = 0; i < N - K; i++) {
  A.push(MAX)
}

console.log(A.sort((a, b) => Number(b + a) - Number(a + b)).join(''))
