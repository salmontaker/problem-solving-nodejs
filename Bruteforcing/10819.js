const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input[1].split(' ').map(Number)
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

let answer = 0

permutations(A, N).forEach((p) => {
  let temp = 0
  for (let i = 0; i < N - 1; i++) {
    temp += Math.abs(p[i] - p[i + 1])
  }
  answer = Math.max(answer, temp)
})

console.log(answer)
