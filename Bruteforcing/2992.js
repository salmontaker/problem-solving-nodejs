const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()

const permutations = ([...arr]) => {
  const result = []
  const output = Array(arr.length).fill(0)
  const visited = Array(arr.length).fill(0)

  const dfs = (depth) => {
    if (depth === arr.length) {
      result.push(output.slice())
      return
    }

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        output[depth] = arr[i]
        visited[i] = 1
        dfs(depth + 1)
        visited[i] = 0
      }
    }
  }

  dfs(0)
  return result
}

const X = Number(input)
const N = permutations(input.split('').sort()).map((res) => Number(res.join('')))

N.forEach((num) => {
  if (num > X) {
    console.log(num)
    process.exit()
  }
})

console.log(0)
