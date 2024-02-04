const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [H, W] = input[0].split(' ').map(Number)
const [R, C, D] = input[1].split(' ').map(Number)
const A = input.slice(2, 2 + H).map((v) => v.split('').map(Number))
const B = input.slice(2 + H).map((v) => v.split('').map(Number))

const room = Array.from(Array(H), () => Array(W).fill(1))
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

let [answer, count] = [0, 0]
let [y, x, d] = [R, C, D]
let visited = Array.from(Array(H), () => Array.from(Array(W), () => [0, 0, 0, 0]))

while (true) {
  count += 1
  visited[y][x][d] = 1

  if (room[y][x] === 1) {
    room[y][x] = 0
    answer = count
    visited = visited.map((v) => v.map(() => [0, 0, 0, 0]))

    d = (d + A[y][x]) % 4
  } else {
    d = (d + B[y][x]) % 4
  }

  y += dy[d]
  x += dx[d]

  if (y < 0 || y >= H || x < 0 || x >= W) {
    break
  }

  if (visited[y][x][d]) {
    break
  }
}

console.log(answer)
