const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const students = input.slice(1)
const len = students[0].length

for (let i = 1; i < len + 1; i++) {
  const set = new Set(students.map((v) => v.slice(len - i)))
  if (students.length === set.size) {
    console.log(i)
    break
  }
}
