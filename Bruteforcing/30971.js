const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, K] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)
const B = input[2].split(' ').map(Number)
const C = input[3].split(' ').map(Number)

const tables = []
for (let i = 0; i < N; i++) {
  tables.push([A[i], B[i], C[i]])
}

const permutations = (arr) => {
  const result = []
  const output = Array(N).fill(0)
  const visited = Array(N).fill(0)

  const dfs = (depth) => {
    if (depth === N) {
      result.push(output.slice())
      return
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        output[depth] = arr[i]
        visited[i] = 1
        dfs(depth + 1)
        visited[i] = 0
      }
    }
  }

  dfs(0)
  return result
}

let answer = -1
permutations(tables).forEach((p) => {
  let temp = 0
  for (let i = 1; i < N; i++) {
    if (p[i - 1][2] * p[i][2] <= K) {
      temp += p[i - 1][0] * p[i][1]
    } else {
      temp = -1
      break
    }
  }

  answer = Math.max(answer, temp)
})

console.log(answer)
