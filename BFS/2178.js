const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map((e) => Number(e))
const maze = input.slice(1, N + 1).map((e) => e.split('').map(Number))
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]

let dist = Array.from(new Array(N), () => new Array(M).fill(-1))
let queue = [[0, 0]]
dist[0][0] = 1

while (queue.length != 0) {
  const [y, x] = queue.shift()
  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]]

    if (-1 < ny && ny < N && -1 < nx && nx < M) {
      if (maze[ny][nx] == 1 && dist[ny][nx] == -1) {
        dist[ny][nx] = dist[y][x] + 1
        queue.push([ny, nx])
      }
    }
  }
}

console.log(dist[N - 1][M - 1])
