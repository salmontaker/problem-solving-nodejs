const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input.slice(1).map((line) => {
  const nums = line.split(' ')
  return [...nums.map(Number), ...Array(N - nums.length).fill(-1)]
})
const D = Array.from(Array(N), () => [...Array(N).fill(0)])

D[0][0] = A[0][0]

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < i + 1; j++) {
    D[i + 1][j] = Math.max(D[i + 1][j], D[i][j] + A[i + 1][j])
    D[i + 1][j + 1] = Math.max(D[i + 1][j + 1], D[i][j] + A[i + 1][j + 1])
  }
}

console.log(Math.max(...D[N - 1]))
