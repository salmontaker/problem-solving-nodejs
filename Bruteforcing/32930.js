const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n');

const eucDistance = (pos1, pos2) => (pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2;

const [N, M] = input[0].split(' ').map(Number);
const posList = input.slice(1, N + 1).map((line) => line.split(' ').map(Number));
let [curX, curY] = [0, 0];
let answer = 0;

for (let i = 0; i < M; i++) {
  posList.sort((a, b) => eucDistance(a, [curX, curY]) - eucDistance(b, [curX, curY]));
  answer += eucDistance(posList.at(-1), [curX, curY]);
  [curX, curY] = posList.pop();
  posList.push(input[N + 1 + i].split(' ').map(Number));
}

console.log(answer);
