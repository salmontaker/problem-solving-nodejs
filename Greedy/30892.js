const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

let [N, K, T] = input[0].split(' ').map(Number)
const A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)
const stack = []

A.forEach((shark) => {
  if (T <= shark) {
    while (stack.length && K) {
      T += stack.pop()
      K -= 1

      if (T > shark) {
        break
      }
    }
  }

  if (T > shark) {
    stack.push(shark)
  }
})

while (stack.length && K) {
  T += stack.pop()
  K -= 1
}

console.log(T)
