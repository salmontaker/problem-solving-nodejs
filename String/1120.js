const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const [A, B] = input.split(' ')
let answer = 50

for (let i = 0; i < B.length - A.length + 1; i++) {
  let cnt = 0
  for (let j = 0; j < A.length; j++) {
    if (A[j] !== B[i + j]) {
      cnt += 1
    }
  }
  answer = Math.min(answer, cnt)
}

console.log(answer)
