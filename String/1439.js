const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const count = { 0: 0, 1: 0 }
let prev = ''

input.split('').forEach((v) => {
  if (prev !== v) {
    prev = v
    count[v] += 1
  }
})

console.log(Math.min(...Object.values(count)))
