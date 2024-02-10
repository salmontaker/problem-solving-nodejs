const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b))
const answer = []

input.slice(1).map((line) => {
  const [a, b, c] = line.split(' ').map(Number)
  answer.push((a < c && b < c) || c % gcd(a, b) !== 0 ? 'NO' : 'YES')
})

console.log(answer.join('\n'))
