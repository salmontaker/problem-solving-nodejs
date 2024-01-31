const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const extract = (line) => {
  const buffer = []

  line.forEach((ch) => {
    if (ch !== '#') {
      buffer.push(ch)
    } else {
      if (buffer.length > 1) {
        words.push(buffer.join(''))
      }
      buffer.length = 0
    }
  })

  if (buffer.length > 1) {
    words.push(buffer.join(''))
  }
}

const [R, C] = input[0].split(' ').map(Number)
const A = input.slice(1).map((v) => v.split(''))
const words = []

for (let y = 0; y < R; y++) {
  extract(A[y])
}

for (let x = 0; x < C; x++) {
  extract(Array.from(Array(R), (_, y) => A[y][x]))
}

console.log(words.sort()[0])
