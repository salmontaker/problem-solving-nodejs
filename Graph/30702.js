const [size, ...flag] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = size.split(' ').map(Number)
const A = flag.slice(0, N).map((line) => line.split(''))
const B = flag.slice(N, N * 2).map((line) => line.split(''))

const NEW_A = Array.from(new Array(N), () => new Array(M).fill('*'))

const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]

const bfs = (y, x, color_a, color_b) => {
  const queue = [[y, x]]
  NEW_A[y][x] = color_b

  let front = 0
  while (queue.length > front) {
    const [y, x] = queue[front++]

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]]

      if (-1 < ny && ny < N && -1 < nx && nx < M) {
        if (A[ny][nx] === color_a && NEW_A[ny][nx] === '*') {
          queue.push([ny, nx])
          NEW_A[ny][nx] = color_b
        }
      }
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (NEW_A[y][x] === '*') {
      bfs(y, x, A[y][x], B[y][x])
    }
  }
}

console.log(NEW_A.toString() === B.toString() ? 'YES' : 'NO')
