const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const words = input.slice(1).map((v) => v.split(''))
const sizeOfWords = {}

words.forEach((word) => {
  for (let i = 0; i < word.length; i++) {
    sizeOfWords[word[i]] = (sizeOfWords[word[i]] || 0) + 10 ** (word.length - i - 1)
  }
})

let num = 9
const valueOfWords = {}

Object.entries(sizeOfWords)
  .sort((a, b) => b[1] - a[1])
  .forEach((v) => (valueOfWords[v[0]] = num--))

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    words[i][j] = String(valueOfWords[words[i][j]])
  }
  words[i] = Number(words[i].join(''))
}

console.log(words.reduce((acc, value) => acc + value, 0))
