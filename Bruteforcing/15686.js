const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const abs = Math.abs
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

const [N, M] = input[0].split(' ').map(Number)
const grid = input.slice(1).map((line) => line.split(' '))
const houses = []
const chickens = []

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (grid[y][x] === '1') {
      houses.push([y, x])
    }
    if (grid[y][x] === '2') {
      chickens.push([y, x])
    }
  }
}

let answer = 10 ** 6

combinations(chickens, M).forEach((selected) => {
  let temp = 0
  houses.forEach((house) => {
    let dist = 10 ** 6
    selected.forEach((chicken) => {
      dist = Math.min(dist, abs(house[0] - chicken[0]) + abs(house[1] - chicken[1]))
    })
    temp += dist
  })
  answer = Math.min(answer, temp)
})

console.log(answer)
