const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input.slice(1).map((line) => line.split(' ').map(Number))
const D = Array.from(Array(N), () => Array(3).fill(0))

for (let i = 0; i < 3; i++) {
  D[0][i] = A[0][i]
}

for (let i = 1; i < N; i++) {
  D[i][0] = A[i][0] + Math.min(D[i - 1][1], D[i - 1][2])
  D[i][1] = A[i][1] + Math.min(D[i - 1][0], D[i - 1][2])
  D[i][2] = A[i][2] + Math.min(D[i - 1][0], D[i - 1][1])
}

console.log(Math.min(...D[N - 1]))
