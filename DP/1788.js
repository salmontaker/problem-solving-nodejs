const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const N = Math.abs(Number(input))
const F = [0, 1, ...Array(Math.abs(N)).fill(0)]
const offset = Number(input) > 0 ? 1 : -1

// N이 양수 : F[i] = F[i - 2] + F[i - 1]
// N이 음수 : F[i] = F[i - 2] - F[i - 1]
for (let i = 2; i <= N; i++) {
  F[i] = (F[i - 2] + F[i - 1] * offset) % 10 ** 9
}

const answer = F[N]

if (answer > 0) console.log(1)
else if (answer < 0) console.log(-1)
else console.log(0)

console.log(Math.abs(answer))
