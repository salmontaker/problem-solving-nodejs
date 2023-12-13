const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const answer = []
input.slice(1).forEach((line) => {
  const buffer = []

  line.split('').forEach((ch) => {
    if (!isNaN(ch)) {
      buffer.push(ch)
    } else if (buffer.length > 0) {
      answer.push(buffer.join(''))
      buffer.length = 0
    }
  })

  if (buffer.length > 0) {
    answer.push(buffer.join(''))
    buffer.length = 0
  }
})

console.log(
  answer
    .sort((a, b) => a - b)
    .map(BigInt)
    .join('\n')
)
