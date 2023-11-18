const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

input.slice(1, Number(input[0]) + 1).forEach((res) => {
  console.log(
    res.split('X').reduce((ans, ch) => {
      return ans + (ch.length * (ch.length + 1)) / 2
    }, 0)
  )
})
