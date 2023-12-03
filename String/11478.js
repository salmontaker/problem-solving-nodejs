const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const S = new Set()
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    S.add(input.slice(i, j + 1))
  }
}

console.log(S.size)
