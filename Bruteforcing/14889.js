const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const combinations = (arr, select) => {
  const result = []
  const output = Array(select).fill(0)

  const dfs = (start, depth) => {
    if (depth === select) {
      result.push(output.slice())
      return
    }

    for (let i = start; i < arr.length; i++) {
      output[depth] = arr[i]
      dfs(i + 1, depth + 1)
    }
  }

  dfs(0, 0)
  return result
}

const N = Number(input[0])
const S = input.slice(1).map((line) => line.split(' ').map(Number))
const rowSum = S.map((row) => row.reduce((acc, value) => acc + value, 0))
const colSum = S[0].map((_, i) => S.reduce((acc, value) => acc + value[i], 0))
const powers = rowSum.map((row, i) => row + colSum[i])
const total = rowSum.reduce((acc, value) => acc + value, 0)

let answer = total

combinations(powers, Math.floor(N / 2)).forEach((combo) => {
  const power = combo.reduce((acc, value) => acc + value, 0)
  const diff = Math.abs(total - power)

  if (answer > diff) {
    answer = diff
  }
})

console.log(answer)
