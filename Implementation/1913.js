const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const M = Number(input[1])
const K = parseInt(N / 2)

const arr = Array.from(Array(N), () => Array(N).fill(0))

let [Y, X] = [K, K]
const fill = (dy, dx, n) => {
  Y += dy
  X += dx
  arr[Y][X] = n + 1
}

arr[K][K] = 1

for (let i = 0; i < K; i++) {
  for (let j = 0; j < 2 * i + 1; j++) {
    fill(-1, 0, arr[Y][X])
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    fill(0, 1, arr[Y][X])
  }
  for (let j = 0; j < 2 * i + 2; j++) {
    fill(1, 0, arr[Y][X])
  }
  for (let j = 0; j < 2 * i + 2; j++) {
    fill(0, -1, arr[Y][X])
  }
}

for (let i = 0; i < N - 1; i++) {
  fill(-1, 0, arr[Y][X])
}

const answer = []
const pos = []
for (let i = 0; i < N; i++) {
  answer.push(arr[i].join(' '))

  for (let j = 0; j < N; j++) {
    if (arr[i][j] === M) {
      pos.push(i + 1, j + 1)
    }
  }
}

console.log(answer.join('\n'))
console.log(...pos)
