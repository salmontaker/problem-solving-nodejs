const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const K = Number(input[0])
const [W, H] = input[1].split(' ').map(Number)
const A = input.slice(2).map((v) => v.split(' ').map(Number))
const D = Array.from(Array(H), () => Array.from(Array(W), () => Array(K + 1).fill(-1)))

const dy = [
  [-2, -1, 1, 2, 2, 1, -1, -2],
  [-1, 0, 1, 0],
]
const dx = [
  [1, 2, 2, 1, -1, -2, -2, -1],
  [0, 1, 0, -1],
]

const queue = [[0, 0, 0]]
D[0][0] = Array(K + 1).fill(0)

while (queue.length > 0) {
  const [y, x, used] = queue.shift()

  if (y === H - 1 && x === W - 1) {
    console.log(D[y][x][used])
    process.exit()
  }

  if (used < K) {
    for (let i = 0; i < 8; i++) {
      const [Y, X] = [y + dy[0][i], x + dx[0][i]]

      if (-1 < Y && Y < H && -1 < X && X < W) {
        if (A[Y][X] === 0 && D[Y][X][used + 1] === -1) {
          queue.push([Y, X, used + 1])
          D[Y][X][used + 1] = D[y][x][used] + 1
        }
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    const [Y, X] = [y + dy[1][i], x + dx[1][i]]

    if (-1 < Y && Y < H && -1 < X && X < W) {
      if (A[Y][X] === 0 && D[Y][X][used] === -1) {
        queue.push([Y, X, used])
        D[Y][X][used] = D[y][x][used] + 1
      }
    }
  }
}

console.log(-1)
