const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
let [y, x, d] = input[1].split(' ').map(Number)

const room = input.slice(2).map((line) => line.split(' '))
const [FRONT, BACK] = [1, -1]
const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
]

const check = (vec) => room[y + dy[d] * vec][x + dx[d] * vec]
const move = (vec) => {
  y = y + dy[d] * vec
  x = x + dx[d] * vec
}

let ans = 0
while (true) {
  if (room[y][x] === '0') {
    room[y][x] = '2'
    ans++
  }

  let cleaned = true
  for (let i = 0; i < 4; i++) {
    if (room[y + dy[i]][x + dx[i]] === '0') {
      cleaned = false
      break
    }
  }

  if (cleaned) {
    if (check(BACK) !== '1') {
      move(BACK)
    } else {
      break
    }
  } else {
    d = (d + 3) % 4

    if (check(FRONT) === '0') {
      move(FRONT)
    }
  }
}

console.log(ans)
