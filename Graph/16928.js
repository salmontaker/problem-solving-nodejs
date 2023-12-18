const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const GOAL = 100
const distance = Array(GOAL + 1).fill(-1)
const ladder = Array(GOAL + 1).fill(0)
const move = [1, 2, 3, 4, 5, 6]

input.slice(1).forEach((line) => {
  const [a, b] = line.split(' ').map(Number)
  ladder[a] = b
})

const queue = [1]
distance[1] = 0

while (queue.length > 0) {
  const current = queue.shift()
  if (current == GOAL) {
    console.log(distance[current])
    break
  }

  for (let i = 0; i < move.length; i++) {
    let next = current + move[i]
    if (next < GOAL + 1) {
      if (ladder[next]) {
        next = ladder[next]
      }

      if (distance[next] == -1) {
        queue.push(next)
        distance[next] = distance[current] + 1
      }
    }
  }
}
