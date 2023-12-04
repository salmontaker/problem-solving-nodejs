const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const parrots = input.slice(1, N + 1).map((line) => line.split(' '))
const sentence = input[N + 1].split(' ')
const check = (word) => {
  for (let i = 0; i < N; i++) {
    const parrot = parrots[i]
    if (parrot[parrot.length - 1] === word) {
      parrot.pop()
      return true
    }
  }
  return false
}

while (sentence.length > 0) {
  if (check(sentence[sentence.length - 1])) {
    sentence.pop()
    continue
  }
  break
}

const correct = sentence.length === 0 && parrots.reduce((acc, value) => acc + value.length, 0) === 0

console.log(correct ? 'Possible' : 'Impossible')
