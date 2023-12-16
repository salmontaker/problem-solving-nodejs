const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
let current = Number(input[1])
let answer = 0

if (N > 1) {
  let arr = input.slice(2).sort((a, b) => b - a)

  while (current <= arr[0]) {
    current += 1
    answer += 1
    arr[0] -= 1
    arr = arr.sort((a, b) => b - a)
  }
}

console.log(answer)
