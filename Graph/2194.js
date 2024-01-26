const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

const [N, M, A, B, K] = input[0].split(' ').map(Number)
const WALL = Array.from(Array(N), () => Array(M).fill(0))
const DIST = Array.from(Array(N), () => Array(M).fill(-1))

input.slice(1, K + 1).forEach((line) => {
  const [y, x] = line.split(' ').map(Number)
  WALL[y - 1][x - 1] = 1
})

let [y1, x1] = input[K + 1].split(' ').map((v) => Number(v) - 1)
let [y2, x2] = input[K + 2].split(' ').map((v) => Number(v) - 1)

const canMove = (y, x) => {
  if (!(-1 < y && y + A - 1 < N && -1 < x && x + B - 1 < M)) {
    return false
  }

  for (let i = 0; i < A; i++) {
    for (let j = 0; j < B; j++) {
      if (WALL[y + i][x + j]) {
        return false
      }
    }
  }

  return true
}

const queue = [[y1, x1]]
DIST[y1][x1] = 0

while (queue.length > 0) {
  const [y, x] = queue.shift()

  if (y == y2 && x == x2) {
    console.log(DIST[y][x])
    process.exit()
  }

  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]]
    if (canMove(ny, nx) && DIST[ny][nx] == -1) {
      queue.push([ny, nx])
      DIST[ny][nx] = DIST[y][x] + 1
    }
  }
}

console.log(-1)
