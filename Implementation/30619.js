const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = [0, ...input[1].split(' ').map(Number)]
const answer = []

input.slice(3).map((query) => {
  const [L, R] = query.split(' ').map(Number)
  const B = [...A]

  const pos = []
  const num = []

  for (let i = 1; i <= N; i++) {
    if (L <= B[i] && B[i] <= R) {
      pos.push(i)
      num.push(B[i])
    }
  }

  const sorted = num.sort((a, b) => a - b)

  for (let i = 0; i <= R - L; i++) {
    B[pos[i]] = sorted[i]
  }

  answer.push(B.slice(1).join(' '))
})

console.log(answer.join('\n'))
