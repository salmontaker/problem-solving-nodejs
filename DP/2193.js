const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const D = [0n, 1n, ...Array(N - 1).fill(0n)]

for (let i = 2; i <= N; i++) {
  D[i] = D[i - 1] + D[i - 2]
}

console.log(D[N].toString())
