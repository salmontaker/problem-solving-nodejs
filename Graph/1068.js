const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input[1].split(' ').map(Number)
const K = Number(input[2])

const graph = Array.from(Array(N), () => [])
const visited = Array(N).fill(0)

let root = -1
let answer = 0

for (let i = 0; i < N; i++) {
  if (A[i] === -1) {
    root = i
  } else if (i != K) {
    graph[A[i]].push(i)
  }
}

const dfs = (node) => {
  visited[node] = 1

  if (graph[node].length === 0) {
    answer += 1
  } else {
    graph[node].forEach((child) => {
      if (!visited[child]) {
        dfs(child)
      }
    })
  }
}

if (root !== K) {
  dfs(root)
}

console.log(answer)
