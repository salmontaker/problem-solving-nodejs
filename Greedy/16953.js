const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

let [A, B] = input.split(' ').map(Number)
let count = 1

while (A < B) {
  if (B % 2 === 0) B = parseInt(B / 2)
  else if (B % 10 === 1) B = parseInt(B / 10)
  else break
  count++
}

console.log(A === B ? count : -1)
