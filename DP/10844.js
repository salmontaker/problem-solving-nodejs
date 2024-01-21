const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const D = Array.from(Array(N + 1), () => Array(10).fill(0))

for (let i = 1; i < 10; i++) {
  D[1][i] = 1
}

for (let i = 2; i < N + 1; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      D[i][j] = D[i - 1][1]
    } else if (j === 9) {
      D[i][j] = D[i - 1][8]
    } else {
      D[i][j] = D[i - 1][j - 1] + D[i - 1][j + 1]
    }
    D[i][j] %= 10 ** 9
  }
}

console.log(D[N].reduce((acc, value) => acc + value, 0) % 10 ** 9)
