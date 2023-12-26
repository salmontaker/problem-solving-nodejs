const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, M, Q] = input[0].split(' ').map(Number)
let balance = M

const stocks = {}
const groups = {}
const companies = {}

input.slice(1, N + 1).forEach((line) => {
  const [G, H, P] = line.split(' ')

  if (groups[G]) {
    groups[G].push(H)
  } else {
    groups[G] = [H]
  }

  companies[H] = Number(P)
})

const buy = (name, amount) => {
  const price = companies[name] * amount

  if (balance >= price) {
    balance -= price
    stocks[name] = (stocks[name] || 0) + amount
  }
}

const sell = (name, amount) => {
  if (stocks[name] != undefined && stocks[name] != 0) {
    const delta = stocks[name] <= amount ? stocks[name] : amount

    balance += companies[name] * delta
    stocks[name] -= delta
  }
}

const delta_company = (name, delta) => {
  companies[name] += delta
}

const delta_group = (id, delta) => {
  Object.values(groups[id]).forEach((name) => {
    companies[name] += delta
  })
}

const delta_group_percent = (id, delta) => {
  Object.values(groups[id]).forEach((name) => {
    companies[name] += companies[name] * (delta * 0.01)
    companies[name] = parseInt(companies[name] * 0.1) * 10
  })
}

const get_balance = () => {
  return balance
}

const get_interest = () => {
  let interest = 0

  Object.entries(stocks).forEach((stock) => {
    const [name, amount] = stock
    interest += companies[name] * amount
  })

  return get_balance() + interest
}

const answer = []
const menu = [buy, sell, delta_company, delta_group, delta_group_percent, get_balance, get_interest]

input.slice(N + 1).forEach((line) => {
  const args = line.split(' ')
  
  if (args.length > 1) {
    menu[Number(args[0]) - 1](args[1], Number(args[2]))
  } else {
    answer.push(menu[Number(args[0]) - 1]())
  }
})

console.log(answer.join('\n'))
