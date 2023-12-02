const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const L = input.length
const R = (str) => [...str].reverse().join('')

let A = [...Array(L).fill('z')].join('')

for (let i = 0; i < L - 2; i++) {
  for (let j = i + 1; j < L - 1; j++) {
    const S = R(input.slice(0, i + 1)) + R(input.slice(i + 1, j + 1)) + R(input.slice(j + 1))

    if (A > S) {
      A = S
    }
  }
}

console.log(A)
