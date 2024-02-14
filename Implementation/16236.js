const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input.slice(1).map((v) => v.split(' ').map(Number))
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

const findFish = (y, x) => {
  const queue = [[y, x]]
  const dist = Array.from(Array(N), () => Array(N).fill(-1))
  const fishes = []

  dist[y][x] = 0

  while (queue.length > 0) {
    const [y, x] = queue.shift()

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]]

      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue
      if (A[ny][nx] > size) continue
      if (dist[ny][nx] !== -1) continue

      queue.push([ny, nx])
      dist[ny][nx] = dist[y][x] + 1

      if (0 < A[ny][nx] && A[ny][nx] < size) {
        fishes.push([dist[ny][nx], ny, nx])
      }
    }
  }

  return fishes.length > 0
    ? fishes.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2])[0]
    : [-1, -1, -1]
}

let [y, x] = [-1, -1]
let [move, ate, size] = [0, 0, 2]

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (A[i][j] === 9) {
      y = i
      x = j
      break
    }
  }
}

while (true) {
  let [dist, ny, nx] = findFish(y, x)

  if (dist === -1) {
    console.log(move)
    break
  }

  A[y][x] = 0
  A[ny][nx] = 9

  y = ny
  x = nx
  move += dist
  ate += 1

  if (ate === size) {
    ate = 0
    size += 1
  }
}
