const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const candidate = []

for (let i = 1; i < N * 2; i += 2) {
  const [P, L] = input[i].split(' ').map(Number)
  const points = input[i + 1]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a)

  candidate.push(P < L ? 1 : points[L - 1])
}

let [answer, current] = [0, M]

candidate
  .sort((a, b) => a - b)
  .forEach((point) => {
    if (current - point > -1) {
      current -= point
      answer += 1
    }
  })

console.log(answer)
