const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M, Q] = input[0].split(' ').map(Number)
const A = Array.from(Array(N + 1), () => Array(M + 1).fill(0))
const answer = []
let cnt = N * M

input.slice(1).forEach((line) => {
  const query = line.split(' ').map(Number)

  if (query[0] === 1) {
    let [dy, dx, y, x] = query.slice(1)
    while (A[y][x] === 0) {
      A[y][x] = 1
      cnt -= 1

      if (y + dy < 1 || y + dy > N || x + dx < 1 || x + dx > M) {
        break
      }

      y = y + dy
      x = x + dx
    }
  } else if (query[0] === 2) {
    const [y, x] = query.slice(1)
    answer.push(A[y][x])
  } else if (query[0] === 3) {
    answer.push(cnt)
  }
})

console.log(answer.join('\n'))
