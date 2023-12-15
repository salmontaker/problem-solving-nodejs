const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const answer = []

input.slice(1).forEach((line) => {
  const [N, M] = line.split(' ')
  const cnt = [0, 0]
  for (let i = 0; i < N.length; i++) {
    if (N[i] != M[i]) {
      if (N[i] === '0') {
        cnt[0] += 1
      } else {
        cnt[1] += 1
      }
    }
  }
  answer.push(Math.max(...cnt))
})

console.log(answer.join('\n'))
