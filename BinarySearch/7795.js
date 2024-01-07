const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const lowerBound = (arr, value) => {
  let [start, end] = [0, arr.length]

  while (start < end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] >= value) {
      end = mid
    } else {
      start = mid + 1
    }
  }

  return start
}

const T = Number(input[0])
const answer = []
for (let i = 1; i < T * 3; i += 3) {
  const cases = input.slice(i, i + 3)
  const A = cases[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
  const B = cases[2]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)

  let cnt = 0
  A.forEach((v) => {
    cnt += lowerBound(B, v)
  })

  answer.push(cnt)
}

console.log(answer.join('\n'))
