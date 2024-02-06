const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const base36ToBigInt = (num) => {
  let res = 0n
  for (let i = 0; i < num.length; i++) {
    res += BigInt(parseInt(num[i], 36)) * 36n ** BigInt(num.length - 1 - i)
  }
  return res
}

const N = Number(input[0])
const NUMS = input.slice(1, 1 + N)
const K = Number(input[1 + N])

const diff = {}

NUMS.forEach((num) => {
  for (let i = 0; i < num.length; i++) {
    diff[num[i]] =
      (diff[num[i]] || 0n) +
      (35n - BigInt(parseInt(num[i], 36))) * 36n ** BigInt(num.length - 1 - i)
  }
})

const candidate = Object.values(diff)
  .sort((a, b) => (a < b ? 1 : -1))
  .slice(0, K)

const answer =
  NUMS.reduce((acc, value) => acc + base36ToBigInt(value), 0n) +
  candidate.reduce((acc, value) => acc + value, 0n)

console.log(answer.toString(36).toUpperCase())
