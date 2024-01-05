const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const books = input.slice(1).map(Number)
let next = books.length
let answer = 0

for (let i = books.length - 1; i > -1; i--) {
  if (books[i] === next) {
    next -= 1
  } else {
    answer += 1
  }
}

console.log(answer)
