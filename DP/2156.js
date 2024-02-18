const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = [0, ...input.slice(1).map(Number)]
const D = Array(N + 1).fill(0)

D[1] = A[1]
if (N > 1) {
  D[2] = D[1] + A[2]
  for (let i = 3; i < N + 1; i++) {
    D[i] = Math.max(D[i - 1], D[i - 2] + A[i], D[i - 3] + A[i - 1] + A[i])
  }
}

console.log(D[N])
