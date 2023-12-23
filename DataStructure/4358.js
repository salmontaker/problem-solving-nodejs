const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const species = {}
input.forEach((name) => {
  species[name] = (species[name] || 0) + 1
})

const answer = []
Object.entries(species)
  .sort()
  .forEach((value) => {
    const [name, count] = value
    answer.push(`${name} ${((count / input.length) * 100).toFixed(4)}`)
  })

console.log(answer.join('\n'))
