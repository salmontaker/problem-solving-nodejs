const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [R, C] = input[0].split(' ').map(Number)
const grid = input.slice(1).map((line) => line.split(''))
const sink = []
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]
const check = (y, x) => {
  let cnt = 0
  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]]
    if (ny < 0 || ny >= R || nx < 0 || nx >= C) {
      cnt += 1
    } else if (grid[ny][nx] === '.') {
      cnt += 1
    }

    if (cnt >= 3) {
      sink.push([y, x])
    }
  }
}

for (let y = 0; y < R; y++) {
  for (let x = 0; x < C; x++) {
    if (grid[y][x] === 'X') {
      check(y, x)
    }
  }
}

for (let i = 0; i < sink.length; i++) {
  const [y, x] = sink[i]
  grid[y][x] = '.'
}

let [min_y, min_x] = [R, C]
let [max_y, max_x] = [0, 0]
for (let y = 0; y < R; y++) {
  for (let x = 0; x < C; x++) {
    if (grid[y][x] === 'X') {
      min_y = Math.min(min_y, y)
      min_x = Math.min(min_x, x)
      max_y = Math.max(max_y, y)
      max_x = Math.max(max_x, x)
    }
  }
}

const answer = []
for (let y = min_y; y < max_y + 1; y++) {
  answer.push(grid[y].slice(min_x, max_x + 1).join(''))
}

console.log(answer.join('\n'))
