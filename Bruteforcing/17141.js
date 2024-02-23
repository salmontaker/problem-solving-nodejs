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

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

const [N, M] = input[0].split(' ').map(Number)
const A = input.slice(1).map((v) => v.split(' ').map(Number))
const EMPTY = []
const VIRUS = []

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (A[y][x] === 0) {
      EMPTY.push([y, x])
    } else if (A[y][x] === 2) {
      VIRUS.push([y, x])
    }
  }
}

let answer = Infinity

combinations(VIRUS, M).forEach((virus) => {
  const queue = []
  const time = Array.from(Array(N), () => Array(N).fill(-1))

  virus.forEach((v) => {
    const [y, x] = v

    queue.push([y, x])
    time[y][x] = 0
  })

  let remain = EMPTY.length + VIRUS.length - M
  let last = []

  while (queue.length > 0) {
    const [y, x] = queue.shift()
    last = [y, x]

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]]

      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue
      if (A[ny][nx] === 1 || time[ny][nx] !== -1) continue

      queue.push([ny, nx])
      time[ny][nx] = time[y][x] + 1
      remain -= 1
    }
  }

  if (remain === 0) {
    answer = Math.min(answer, time[last[0]][last[1]])
  }
})

console.log(answer !== Infinity ? answer : -1)
