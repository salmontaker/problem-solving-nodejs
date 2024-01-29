const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const A = BigInt(input[0])
const X = BigInt(input[1]).toString(2)

const MOD = BigInt(10 ** 9 + 7)
const D = [A % MOD, ...Array(X.length - 1).fill(0n)]

for (let i = 1; i < D.length; i++) {
  D[i] = (D[i - 1] * D[i - 1]) % MOD
}

let answer = 1n
for (let i = 0; i < D.length; i++) {
  if (X[i] === '1') {
    answer = (answer * D[D.length - i - 1]) % MOD
  }
}

console.log(answer.toString())
