const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const DP = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, ...Array(90).fill(0)]
for (let i = 11; i < DP.length; i++) {
  DP[i] = DP[i - 5] + DP[i - 1]
}

const answer = []
input.slice(1).forEach((v) => {
  answer.push(DP[Number(v)])
})

console.log(answer.join('\n'))
