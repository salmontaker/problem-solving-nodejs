const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const maze = input.slice(1, N + 1).map((e) => e.split('').map(Number))
const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
]
const distance = Array.from(new Array(N), () => new Array(M).fill(-1))
const queue = [[0, 0]]
distance[0][0] = 1

while (queue.length != 0) {
  const [y, x] = queue.shift()

  direction.forEach((dir) => {
    const [ny, nx] = [y + dir[0], x + dir[1]]

    if (-1 < ny && ny < N && -1 < nx && nx < M) {
      if (maze[ny][nx] == 1 && distance[ny][nx] == -1) {
        distance[ny][nx] = distance[y][x] + 1
        queue.push([ny, nx])
      }
    }
  })
}

console.log(distance[N - 1][M - 1])
