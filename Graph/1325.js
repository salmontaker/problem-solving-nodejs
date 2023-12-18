const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const graph = Array.from(Array(N + 1), () => Array())
const bfs = (node) => {
  const queue = [node]
  const visited = Array(N + 1).fill(0)
  visited[node] = 1

  let cnt = 1
  while (queue.length > 0) {
    const current = queue.shift()

    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i]
      if (!visited[next]) {
        queue.push(next)
        visited[next] = 1
        cnt += 1
      }
    }
  }

  return cnt
}

input.slice(1).forEach((line) => {
  const [a, b] = line.split(' ').map(Number)
  graph[b].push(a)
})

let maxCnt = 0
let answer = []

for (let i = 1; i < N + 1; i++) {
  const cnt = bfs(i)
  if (maxCnt < cnt) {
    maxCnt = cnt
    answer = [i]
  } else if (maxCnt === cnt) {
    answer.push(i)
  }
}

console.log(answer.sort((a, b) => a - b).join(' '))
