const [size, ...board] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = size.split(' ').map(Number)
const distance = Array.from(Array(2), () => Array.from(Array(N), () => Array(M).fill(-1)))
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]

const bfs = () => {
  const queue = [[0, 0, 0]]
  distance[0][0][0] = distance[1][0][0] = 1

  let front = 0
  while (queue.length > front) {
    const [z, y, x] = queue[front++]
    if (y === N - 1 && x === M - 1) {
      return distance[z][y][x]
    }

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]]
      if (-1 < ny && ny < N && -1 < nx && nx < M) {
        if (board[ny][nx] === '0' && distance[z][ny][nx] === -1) {
          queue.push([z, ny, nx])
          distance[z][ny][nx] = distance[z][y][x] + 1
        }
        if (board[ny][nx] === '1' && distance[1][ny][nx] === -1 && z !== 1) {
          queue.push([1, ny, nx])
          distance[1][ny][nx] = distance[z][y][x] + 1
        }
      }
    }
  }

  return -1
}

console.log(bfs())
