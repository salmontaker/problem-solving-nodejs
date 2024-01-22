const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input[1].split(' ').map(Number)
const D = Array(N).fill(0)

D[0] = A[0]
for (let i = 1; i < N; i++) {
  D[i] = Math.max(A[i], A[i] + D[i - 1])
}

console.log(Math.max(...D))
