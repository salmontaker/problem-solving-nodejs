const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const D = [0, 1, 1, 2, 2, 1, 2, 1, ...Array(N > 7 ? N - 7 : 0).fill(0)]

for (let i = 8; i < N + 1; i++) {
  D[i] = D[i - 1] + 1
  D[i] = Math.min(D[i], D[i - 2] + 1)
  D[i] = Math.min(D[i], D[i - 5] + 1)
  D[i] = Math.min(D[i], D[i - 7] + 1)
}

console.log(D[N])