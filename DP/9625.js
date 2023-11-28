const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const k = Number(input)
const a = [1, ...Array(k).fill(0)]
const b = [0, ...Array(k).fill(0)]

for (let i = 1; i <= k; i++) {
  a[i] = b[i - 1]
  b[i] = a[i - 1] + b[i - 1]
}

console.log(a[k], b[k])
