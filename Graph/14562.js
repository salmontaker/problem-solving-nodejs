const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const answer = []

input.slice(1).forEach((line) => {
  const [S, T] = line.split(' ').map(Number)
  const queue = [[S, T, 0]]

  let front = 0
  while (queue.length > front) {
    const [s, t, cnt] = queue[front++]
    if (s === t) {
      answer.push(cnt)
      break
    }
    if (s * 2 <= t + 3) {
      queue.push([s * 2, t + 3, cnt + 1])
    }
    if (s + 1 <= t) {
      queue.push([s + 1, t, cnt + 1])
    }
  }
})

console.log(answer.join('\n'))
