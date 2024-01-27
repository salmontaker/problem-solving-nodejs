const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input[1].split(' ').map(Number)
const stack = []
const answer = Array(N).fill(0)

for (let i = 0; i < N; i++) {
  while (stack.length > 0) {
    const top = stack[stack.length - 1]

    if (top[1] > A[i]) {
      answer[i] = top[0] + 1
      break
    } else {
      stack.pop()
    }
  }
  stack.push([i, A[i]])
}

console.log(...answer)
