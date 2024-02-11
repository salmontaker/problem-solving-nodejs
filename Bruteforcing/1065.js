const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const check = (str) => {
  if (str.length < 3) {
    return true
  }

  let diff = str[0] - str[1]

  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] - str[i + 1] !== diff) {
      return false
    }
  }

  return true
}

let answer = 0

for (let i = 1; i <= Number(input[0]); i++) {
  if (check(i.toString())) {
    answer += 1
  }
}

console.log(answer)
