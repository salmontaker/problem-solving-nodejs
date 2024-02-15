const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const A = input.slice(1, N + 1).map((v) => v.split(' ').map(Number))
const S = Array.from(Array(N + 1), () => Array(N + 1).fill(0))

for (let y = 1; y < N + 1; y++) {
  for (let x = 1; x < N + 1; x++) {
    S[y][x] = A[y - 1][x - 1] + S[y - 1][x] + S[y][x - 1] - S[y - 1][x - 1]
  }
}

const answer = []

input.slice(N + 1).forEach((v) => {
  const [y1, x1, y2, x2] = v.split(' ').map(Number)
  answer.push(S[y2][x2] - S[y2][x1 - 1] - S[y1 - 1][x2] + S[y1 - 1][x1 - 1])
})

console.log(answer.join('\n'))
