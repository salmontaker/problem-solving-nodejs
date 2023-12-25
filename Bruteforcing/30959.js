const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)
const B = input.slice(2).map((line) => line.split(' ').map(Number))

const accuracyOf = (model) => {
  let correct = 0
  for (let i = 0; i < M; i++) {
    if (A[i] === model[i]) {
      correct += 1
    }
  }

  return correct / M
}

const ensemble = (combo) => {
  const result = []
  combo.forEach((models) => {
    const temp = []
    for (let i = 0; i < M; i++) {
      const cnt = [0, 0]
      models.forEach((model) => {
        cnt[model[i]] += 1
      })
      temp.push(cnt[0] > cnt[1] ? 0 : 1)
    }
    result.push(temp)
  })

  return result
}

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

const highest = Math.max(...B.map(accuracyOf))
for (let select = 3; select < N + 1; select += 2) {
  const models = ensemble(combinations(B, select))
  models.forEach((model) => {
    if (highest < accuracyOf(model)) {
      console.log(1)
      process.exit()
    }
  })
}

console.log(0)
