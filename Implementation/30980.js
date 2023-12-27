const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const A = input.slice(1).map((line) => line.split(''))

for (let row = 0; row < N * 3; row += 3) {
  const target = A.slice(row + 1)[0]

  for (let col = 0; col < M * 8; col += 8) {
    const formula = target.slice(col, col + 8)
    const sum = Number(formula[1]) + Number(formula[3])
    const check = Number(formula.slice(5, 7).join('').replace('.', ''))
    const offset = Number(check > 9)

    if (sum === check) {
      A[row + 1][col] = '*'
      A[row + 1][col + 6 + offset] = '*'
      for (let k = 1; k < 6 + offset; k++) {
        A[row][col + k] = '*'
        A[row + 2][col + k] = '*'
      }
    } else {
      A[row][col + 3] = '/'
      A[row + 1][col + 2] = '/'
      A[row + 2][col + 1] = '/'
    }
  }
}

const answer = []
A.forEach((line) => answer.push(line.join('')))

console.log(answer.join('\n'))
