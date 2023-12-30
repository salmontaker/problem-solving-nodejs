const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const count = ([...str]) => {
  const cnt = Array(26).fill(0)

  str.forEach((ch) => {
    cnt[ch.charCodeAt() - 'A'.charCodeAt()] += 1
  })

  return cnt
}

const check = (a, b) => {
  const [A, B] = [count(a), count(b)]
  let diff = 0

  for (let i = 0; i < 26; i++) {
    diff += Math.abs(A[i] - B[i])
  }

  return Math.abs(a.length - b.length) < 2 && diff < 3
}

let answer = 0
input.slice(2).forEach((word) => {
  answer += check(input[1], word)
})

console.log(answer)
