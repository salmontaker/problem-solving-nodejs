const [S, P] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

let answer = 1
let [left, right] = [0, 0]
while (right < P.length) {
  const target = P.slice(left, right + 1)
  if (S.indexOf(target) === -1) {
    left = right
    answer += 1
  }
  right += 1
}

console.log(answer)
