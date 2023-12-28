const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const fibo = [0n, 1n, 1n, ...Array(77).fill(0n)]
for (let i = 3; i < fibo.length; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2]
}

const sums = [new Set(), new Set(), new Set()]
for (let i = 1; i < fibo.length; i++) {
  sums[0].add(fibo[i])
  for (let j = 1; j < fibo.length; j++) {
    sums[1].add(fibo[i] + fibo[j])
    for (let k = 1; k < fibo.length; k++) {
      sums[2].add(fibo[i] + fibo[j] + fibo[k])
    }
  }
}

const answer = []
input.slice(1).forEach((line) => {
  const [n, target] = line.split(' ').map(BigInt)
  answer.push(sums[n - 1n].has(target) ? 'YES' : 'NO')
})

console.log(answer.join('\n'))
