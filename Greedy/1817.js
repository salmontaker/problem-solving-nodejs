const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
let answer = 0

if (N > 0) {
  let current = 0
  input[1].split(' ').forEach((v) => {
    const weight = Number(v)
    if (current + weight <= M) {
      current += weight
    } else {
      current = weight
      answer += 1
    }
  })

  if (current > 0) {
    answer += 1
  }
}

console.log(answer)
