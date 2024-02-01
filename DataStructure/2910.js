const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const count = new Map()
const answer = []

input[1].split(' ').forEach((v) => {
  count.set(v, (count.has(v) ? count.get(v) : 0) + 1)
})

Array.from(count)
  .sort((a, b) => b[1] - a[1])
  .forEach((v) => {
    const [num, count] = v
    for (let i = 0; i < count; i++) {
      answer.push(num)
    }
  })

console.log(answer.join(' '))
