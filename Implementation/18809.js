const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M, G, R] = input[0].split(' ').map(Number)
const garden = input.slice(1).map((v) => v.split(' ').map(Number))
const candidate = []
const posGreen = []
const posRed = []

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

const selectPos = (pos, depth, green, red) => {
  if (depth === G + R) {
    answer = Math.max(answer, simulate())
    return
  }

  if (green < G) {
    posGreen.push(pos[depth])
    selectPos(pos, depth + 1, green + 1, red)
    posGreen.pop()
  }

  if (red < R) {
    posRed.push(pos[depth])
    selectPos(pos, depth + 1, green, red + 1)
    posRed.pop()
  }
}

const INF = Number.MAX_SAFE_INTEGER
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]
const simulate = () => {
  const queue = []
  const visited = Array.from(Array(N), () => Array(M).fill(0))

  posGreen.forEach((pos) => {
    const [y, x] = pos

    queue.push([y, x])
    visited[y][x] = -1
  })

  posRed.forEach((pos) => {
    const [y, x] = pos

    queue.push([y, x])
    visited[y][x] = 1
  })

  let cnt = 0

  while (queue.length > 0) {
    const [y, x] = queue.shift()

    if (visited[y][x] === INF) continue

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]]

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue
      if (garden[ny][nx] === 0) continue

      if (!visited[ny][nx]) {
        visited[ny][nx] = visited[y][x] + (visited[y][x] < 0 ? -1 : 1)
        queue.push([ny, nx])
      } else if (visited[ny][nx] + visited[y][x] + 1 === 0) {
        visited[ny][nx] = INF
        cnt += 1
      }
    }
  }

  return cnt
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (garden[y][x] === 2) {
      candidate.push([y, x])
    }
  }
}

let answer = 0

combinations(candidate, R + G).forEach((pos) => {
  selectPos(pos, 0, 0, 0)
})

console.log(answer)
