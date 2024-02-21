const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input[1].split(' ').map(Number)
const B = input[2].split(' ').map(Number)

const dfs = (depth, result) => {
  if (depth === N) {
    answer[0] = Math.max(answer[0], result)
    answer[1] = Math.min(answer[1], result)
    return
  }

  if (B[0] > 0) {
    B[0] -= 1
    dfs(depth + 1, result + A[depth])
    B[0] += 1
  }
  if (B[1] > 0) {
    B[1] -= 1
    dfs(depth + 1, result - A[depth])
    B[1] += 1
  }
  if (B[2] > 0) {
    B[2] -= 1
    dfs(depth + 1, result * A[depth])
    B[2] += 1
  }
  if (B[3] > 0) {
    B[3] -= 1
    dfs(depth + 1, Math.trunc(result / A[depth]))
    B[3] += 1
  }
}

let answer = [-(10 ** 9), 10 ** 9]

dfs(1, A[0])

console.log(answer.join('\n'))
