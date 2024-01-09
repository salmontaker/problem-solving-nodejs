const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const options = input.slice(1)
const answer = []
const used = new Set()

const canAssignHead = (option) => {
  let head = option[0]

  for (let i = 0; i < option.length; i++) {
    if (!used.has(head.toUpperCase())) {
      answer.push(option.slice(0, i) + `[${head}]` + option.slice(i + 1))
      used.add(head.toUpperCase())
      return true
    }
    if (option[i] === ' ') {
      head = option[i + 1]
    }
  }

  return false
}
const canAssignAny = (option) => {
  for (let i = 0; i < option.length; i++) {
    if (option[i] !== ' ' && !used.has(option[i].toUpperCase())) {
      answer.push(option.slice(0, i) + `[${option[i]}]` + option.slice(i + 1))
      used.add(option[i].toUpperCase())
      return true
    }
  }

  return false
}

for (let i = 0; i < options.length; i++) {
  if (canAssignHead(options[i])) {
    continue
  }
  if (canAssignAny(options[i])) {
    continue
  }
  answer.push(options[i])
}

console.log(answer.join('\n'))
