const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const village = input.slice(1).map((line) => line.split(' ').map(Number))
const visited = Array.from(Array(N), () => Array(M).fill(0))
const queue = []
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (village[y][x] == 1 || village[y][x] == 2) {
      queue.push([y, x])
      visited[y][x] = 1
    }
  }
}

let front = 0
while (queue.length > front) {
  const [y, x] = queue[front++]

  if (village[y][x] == 3) {
    continue
  }

  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]]
    if (-1 < ny && ny < N && -1 < nx && nx < M) {
      if (village[ny][nx] == 0) {
        queue.push([ny, nx])
        village[ny][nx] = village[y][x]
        visited[ny][nx] = visited[y][x] + 1
      } else if (village[ny][nx] == 1) {
        if (village[y][x] == 2 && visited[ny][nx] == visited[y][x] + 1) {
          village[ny][nx] = 3
        }
      } else if (village[ny][nx] == 2) {
        if (village[y][x] == 1 && visited[ny][nx] == visited[y][x] + 1) {
          village[ny][nx] = 3
        }
      }
    }
  }
}

const answer = [0, 0, 0]
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (village[y][x] == 1) {
      answer[0] += 1
    } else if (village[y][x] == 2) {
      answer[1] += 1
    } else if (village[y][x] == 3) {
      answer[2] += 1
    }
  }
}

console.log(answer.join(' '))
