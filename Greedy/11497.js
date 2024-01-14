const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const T = Number(input[0])
const answer = []
for (let i = 1; i < T * 2; i += 2) {
  const testCase = input.slice(i, i + 2)
  const N = Number(testCase[0])
  const A = testCase[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
  const B = [...A.filter((_, i) => i % 2 === 0), ...A.filter((_, i) => i % 2 !== 0).reverse()]

  let level = 0
  for (let j = 0; j < N; j++) {
    level = Math.max(level, Math.abs(B[j] - B[(j + 1) % N]))
  }
  answer.push(level)
}
console.log(answer.join('\n'))
