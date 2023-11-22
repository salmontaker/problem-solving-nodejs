const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const R = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)

let ans = 0
for (let i = 0; i < N; i++) {
  ans = Math.max(ans, R[i] * (N - i))
}

console.log(ans)
