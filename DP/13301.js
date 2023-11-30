const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const N = Number(input)
const D = [0n, 1n, ...Array(N)]

for (let i = 2; i <= N + 1; i++) {
  D[i] = BigInt(D[i - 1]) + BigInt(D[i - 2])
}

console.log(((D[N] + D[N + 1]) * 2n).toString())
