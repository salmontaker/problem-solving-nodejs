const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const D = Array(N + 1).fill(0)

for (let i = 1; i <= N; i++) {
  D[i] = i
  for (let j = 1; j * j <= i; j++) {
    if (D[i] > D[i - j * j] + 1) {
      D[i] = D[i - j * j] + 1
    }
  }
}

console.log(D[N])
