const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const grid = input.slice(1).map((line) => line.split(' ').map(Number))
const visited = Array.from(Array(N), () => Array(M).fill(0))
const dy = [-1, -1, -1, 0, 0, 1, 1, 1]
const dx = [-1, 0, 1, -1, 1, -1, 0, 1]

const bfs = (y, x) => {
  const current = grid[y][x]
  let isPeak = 1

  const queue = [[y, x]]
  visited[y][x] = 1

  let front = 0
  while (queue.length > front) {
    const [y, x] = queue[front++]
    for (let i = 0; i < 8; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]]
      if (-1 < ny && ny < N && -1 < nx && nx < M) {
        if (grid[ny][nx] == current && !visited[ny][nx]) {
          queue.push([ny, nx])
          visited[ny][nx] = 1
        }
        if (grid[ny][nx] > current) {
          isPeak = 0
        }
      }
    }
  }

  return isPeak
}

let answer = 0
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (!visited[y][x]) {
      answer += bfs(y, x)
    }
  }
}

console.log(answer)
