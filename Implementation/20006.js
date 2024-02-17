const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [P, M] = input[0].split(' ').map(Number)
const rooms = []
const joinRooms = (L, N) => {
  for (let i = 0; i < rooms.length; i++) {
    const room = rooms[i]

    if (Math.abs(room[0][0] - L) <= 10 && room.length < M) {
      room.push([L, N])
      return
    }
  }

  rooms.push([[L, N]])
}

input.slice(1).forEach((line) => {
  const [L, N] = line.split(' ')
  joinRooms(Number(L), N)
})

const answer = []

rooms.forEach((room) => {
  answer.push(room.length === M ? 'Started!' : 'Waiting!')

  room
    .sort((a, b) => (a[1] > b[1] ? 1 : -1))
    .forEach((player) => {
      answer.push(player.join(' '))
    })
})

console.log(answer.join('\n'))
