const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const IN = input.slice(1, N + 1)
const OUT = input.slice(N + 1)

let answer = 0
while (IN.length > 0) {
  if (IN[0] != OUT[0]) {
    IN.splice(IN.indexOf(OUT.shift()), 1)
    answer += 1
  } else {
    IN.shift()
    OUT.shift()
  }
}

console.log(answer)
