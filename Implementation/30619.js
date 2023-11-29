const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const benefit = (list) =>
  [...list].reduce((acc, value, idx) => {
    return (acc += value * idx)
  })

const N = Number(input[0])
const A = [0, ...input[1].split(' ').map(Number)]
const current = benefit(A)
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

  if (current < benefit(B)) {
    answer.push(B.slice(1).join(' '))
  } else {
    answer.push(A.slice(1).join(' '))
  }
})

console.log(answer.join('\n'))
