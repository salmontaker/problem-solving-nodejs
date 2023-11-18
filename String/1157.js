const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .toUpperCase()
  .split('')

const dict = {}

input.forEach((ch) => {
  dict[ch] = (dict[ch] || 0) + 1
})

const max = Math.max(...Object.values(dict))
const answer = Object.entries(dict).filter(([key, value]) => value === max)

console.log(answer.length > 1 ? '?' : answer[0][0])
