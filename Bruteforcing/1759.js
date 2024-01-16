const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

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

const [L, C] = input[0].split(' ').map(Number)
const A = input[1].split(' ').sort()
const check = new Set(['a', 'e', 'i', 'o', 'u'])
const answer = []

combinations(A, L).forEach((word) => {
  let [vowels, consonants] = [0, 0]

  word.forEach((ch) => {
    if (check.has(ch)) {
      vowels += 1
    } else {
      consonants += 1
    }
  })

  if (vowels >= 1 && consonants >= 2) {
    answer.push(word.join(''))
  }
})

console.log(answer.join('\n'))
