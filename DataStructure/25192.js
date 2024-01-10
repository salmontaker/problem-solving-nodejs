const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const emoji = new Set()
let answer = 0
input.slice(1).forEach((log) => {
  if (log === 'ENTER') {
    answer += emoji.size
    emoji.clear()
  } else {
    emoji.add(log)
  }
})

answer += emoji.size
console.log(answer)
