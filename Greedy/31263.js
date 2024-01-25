const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const S = input[1]
let answer = 0

let i = Number(input[0])
while (i > 2) {
  if (S[i - 3] !== '0' && S.slice(i - 3, i) < '642') {
    i -= 3
  } else if (S[i - 2] !== '0') {
    i -= 2
  } else {
    i -= 1
  }

  answer += 1
}

if (i != 0) {
  answer += 1
}

console.log(answer)
