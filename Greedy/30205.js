const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M, P] = input[0].split(' ').map(Number)
const bases = input.slice(1).map((base) =>
  base
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
)
let [power, item] = [P, 0]

const isPossible = (value) => {
  for (let i = 0; i <= item; i++) {
    if (power * 2 ** i >= value) {
      power *= 2 ** i
      item -= i
      return true
    }
  }
  return false
}

bases.forEach((base) => {
  base.forEach((value) => {
    if (value === -1) {
      item += 1
    } else if (isPossible(value)) {
      power += value
    } else {
      console.log(0)
      process.exit()
    }
  })
  power *= 2 ** item
  item = 0
})

console.log(1)
