const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const memo = Array.from(Array(21), () => Array.from(Array(21), () => Array(21).fill(0)))
const answer = []
const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1
  }

  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20)
  }

  if (memo[a][b][c]) {
    return memo[a][b][c]
  }

  if (a < b && b < c) {
    memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c)
    return memo[a][b][c]
  }

  memo[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1)
  return memo[a][b][c]
}

input.slice(0, input.length - 1).forEach((line) => {
  const [a, b, c] = line.split(' ').map(Number)
  answer.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`)
})

console.log(answer.join('\n'))
