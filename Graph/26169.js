const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]
const dfs = (depth, cnt, y, x) => {
  if (cnt >= 2) {
    console.log(1)
    process.exit()
  }

  if (depth === 3) {
    return
  }

  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]]
    const prev = A[y][x]

    if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue
    if (A[ny][nx] === -1) continue

    A[y][x] = -1
    dfs(depth + 1, cnt + A[ny][nx], ny, nx)
    A[y][x] = prev
  }
}

const N = 5
const A = input.slice(0, N).map((v) => v.split(' ').map(Number))
const [R, C] = input[N].split(' ').map(Number)

dfs(0, 0, R, C)
console.log(0)
