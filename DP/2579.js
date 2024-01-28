const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = [0, ...input.slice(1).map(Number)]
const SUM = A.reduce((acc, value) => acc + value, 0)

if (N < 3) {
  console.log(SUM)
} else {
  const D = Array(N + 1).fill(0)

  for (let i = 1; i < 4; i++) {
    D[i] = A[i]
  }
  for (let i = 4; i < N + 1; i++) {
    D[i] = Math.min(D[i - 2], D[i - 3]) + A[i]
  }

  console.log(SUM - Math.min(D[N - 1], D[N - 2]))
}
