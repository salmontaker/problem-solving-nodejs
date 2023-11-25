const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [head, tail] = input[1].split('*')

const is_match = (name) => {
  const a = name.length < head.length + tail.length
  const b = name.slice(0, head.length) !== head
  const c = name.slice(name.length - tail.length) !== tail

  return a || b || c ? 'NE' : 'DA'
}

console.log([...input.slice(2).map(is_match)].join('\n'))
