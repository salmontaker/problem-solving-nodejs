const [T, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const distance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
const ans = []

let idx = 0
for (let t = 0; t < Number(T); t++) {
  const N = Number(input[idx])
  const pos = Array()
  const graph = Array.from(Array(N + 2), () => Array())
  const visited = Array(N + 2).fill(0)

  input.slice(idx + 1, idx + N + 3).forEach((p) => {
    pos.push(p.split(' ').map(Number))
  })

  idx += N + 3

  for (let i = 0; i < N + 2; i++) {
    for (let j = 0; j < N + 2; j++) {
      if (i !== j && distance(pos[i], pos[j]) <= 1000) {
        graph[i].push(j)
      }
    }
  }

  const queue = [0]
  visited[0] = 1

  let front = 0
  while (queue.length > front) {
    const cur = queue[front++]
    for (const next of graph[cur]) {
      if (!visited[next]) {
        queue.push(next)
        visited[next] = 1
      }
    }
  }

  ans.push(visited[N + 1] ? 'happy' : 'sad')
}

console.log(ans.join('\n'))
