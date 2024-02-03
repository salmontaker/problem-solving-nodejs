const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = [0, ...input[1].split(' ').map(Number)]
const D = [0, Array(N).fill(0)]

for (let i = 1; i < N + 1; i++) {
  if (A[i] > A[i - 1]) {
    D[i] = D[i - 1] + 1
  } else {
    D[i] = 1
  }
}

console.log(D.reduce((acc, value) => acc + value, 0))
