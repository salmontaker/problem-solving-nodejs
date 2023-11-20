const [N, ...T] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const MAX = 40
const d0 = [1, 0, ...Array(MAX - 1).fill(0)]
const d1 = [0, 1, ...Array(MAX - 1).fill(0)]

for (let i = 2; i <= MAX; i++) {
  d0[i] = d0[i - 1] + d0[i - 2]
  d1[i] = d1[i - 1] + d1[i - 2]
}

T.forEach((t) => {
  console.log(d0[t], d1[t])
})
