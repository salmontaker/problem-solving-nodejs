const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .split('\n')

const area = Array.from(new Array(101), () => new Array(101).fill(0))
let answer = 0

input.map((line) => {
  const [x1, y1, x2, y2] = line.split(' ').map(Number)

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      area[y][x] = 1
    }
  }
})

area.forEach((row) => {
  row.forEach((col) => {
    answer += col
  })
})

console.log(answer)
