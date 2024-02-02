const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, K] = input[0].split(' ').map(Number)
const S = input[1].split('')

let [y, x] = [0, 0]

for (let i = 0; i < Math.min(N, K); i++) {
  S.forEach((v) => {
    if (v === 'U') y -= 1
    else if (v === 'D') y += 1
    else if (v === 'L') x -= 1
    else if (v === 'R') x += 1

    if (y === 0 && x === 0) {
      console.log('YES')
      process.exit()
    }
  })
}

console.log('NO')
