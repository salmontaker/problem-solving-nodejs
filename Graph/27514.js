const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const nums = input[1].split(' ').map(Number)
const count = Array(64).fill(0)
let answer = 0n

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    count[Math.log2(nums[i])] += 1
  }
}

for (let i = 0; i < 64; i++) {
  if (count[i] !== 0) {
    count[i + 1] += Math.floor(count[i] / 2)
    count[i] = count[i] % 2
    answer = 2n ** BigInt(i)
  }
}

console.log(answer.toString())
