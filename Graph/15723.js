const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const graph = Array.from(Array(26), () => Array())
const atoi = (ch) => ch.charCodeAt() - 'a'.charCodeAt()
const bfs = (start, target) => {
  const queue = [start]

  while (queue.length > 0) {
    const current = queue.shift()

    if (current === target) {
      return true
    }

    graph[current].forEach((next) => queue.push(next))
  }

  return false
}

input.slice(1, N + 1).forEach((line) => {
  const [a, _, b] = line.split(' ')
  graph[atoi(a)].push(atoi(b))
})

const answer = []

input.slice(N + 2).forEach((line) => {
  const [a, _, b] = line.split(' ')
  answer.push(bfs(atoi(a), atoi(b)) ? 'T' : 'F')
})

console.log(answer.join('\n'))
