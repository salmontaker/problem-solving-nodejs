const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const dfs = (y) => {
  if (y === N) {
    answer += 1
    return
  }

  for (let x = 0; x < N; x++) {
    if (!usedVertical[x] && !usedSlash[y + x] && !usedBackSlash[y - x + N - 1]) {
      usedVertical[x] = usedSlash[y + x] = usedBackSlash[y - x + N - 1] = 1
      dfs(y + 1)
      usedVertical[x] = usedSlash[y + x] = usedBackSlash[y - x + N - 1] = 0
    }
  }
}

const N = Number(input[0])
const usedVertical = Array(N).fill(0)
const usedSlash = Array(2 * N + 1).fill(0)
const usedBackSlash = Array(2 * N + 1).fill(0)

let answer = 0

dfs(0)
console.log(answer)
