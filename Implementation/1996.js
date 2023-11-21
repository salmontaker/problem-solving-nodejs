const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const A = input.slice(1).map((s) => s.split(''))
const B = Array.from(new Array(N), () => new Array(N).fill(0))
const dy = [1, 1, 1, 0, -1, -1, -1, 0]
const dx = [-1, 0, 1, 1, 1, 0, -1, -1]

const count = (y, x) => {
  let cnt = 0

  for (let i = 0; i < 8; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]]

    if (-1 < ny && ny < N && -1 < nx && nx < N && A[ny][nx] != '.') {
      cnt += Number(A[ny][nx])
    }
  }

  return cnt > 9 ? 'M' : cnt.toString()
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    B[y][x] = A[y][x] == '.' ? count(y, x) : '*'
  }
}

console.log(B.map((b) => b.join('')).join('\n'))
