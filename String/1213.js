const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const cnt = Array(26).fill(0)
const charCode = 'A'.charCodeAt()
let head = ''
let mid = ''

for (let i = 0; i < input.length; i++) {
  cnt[input[i].charCodeAt() - charCode] += 1
}

for (let i = 0; i < 26; i++) {
  if (cnt[i] % 2 != 0) {
    mid += String.fromCharCode(charCode + i)
  }
  head += String.fromCharCode(charCode + i).repeat(cnt[i] / 2)
}

if (mid.length > 1) {
  console.log("I'm Sorry Hansoo")
} else {
  console.log(head + mid + head.split('').reverse().join(''))
}
