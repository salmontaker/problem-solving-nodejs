const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : __dirname + '/../input.txt')
  .toString()
  .trim()
  .split('\n')

class Heap {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
    this.bubbleUp(this.items.length - 1)
  }

  bubbleUp(index) {
    const item = this.items[index]

    while (index > 0) {
      const parentIndex = Math.floor((index + 1) / 2) - 1
      const parentItem = this.items[parentIndex]

      if (parentItem < item) {
        return
      }

      this.items[index] = parentItem
      this.items[parentIndex] = item
      index = parentIndex
    }
  }

  pop() {
    if (this.items.length === 0) {
      return
    }

    const item = this.items[0]
    const lastItem = this.items.pop()

    if (this.items.length > 0) {
      this.items[0] = lastItem
      this.sinkDown(0)
    }

    return item
  }

  sinkDown(index) {
    const item = this.items[index]

    while (true) {
      const leftChildIndex = 2 * (index + 1) - 1
      const rightChildIndex = 2 * (index + 1)
      let swapIndex = -1

      if (leftChildIndex < this.items.length) {
        const leftChild = this.items[leftChildIndex]
        if (leftChild < item) {
          swapIndex = leftChildIndex
        }
      }

      if (rightChildIndex < this.items.length) {
        const rightChild = this.items[rightChildIndex]
        if (rightChild < item) {
          if (swapIndex === -1 || rightChild < this.items[swapIndex]) {
            swapIndex = rightChildIndex
          }
        }
      }

      if (swapIndex === -1) {
        return
      }

      this.items[index] = this.items[swapIndex]
      this.items[swapIndex] = item
      index = swapIndex
    }
  }
}

const [N, H, T] = input[0].split(' ').map(Number)
let K = 0

const heap = new Heap()
input.slice(1).forEach((v) => {
  heap.push(-v)
})

while (true) {
  const tallest = Math.abs(heap.pop())
  if (tallest < H) {
    console.log(`YES\n${K}`)
    break
  } else {
    if (K === T) {
      console.log(`NO\n${tallest}`)
      break
    }

    heap.push(tallest === 1 ? -tallest : -Math.floor(tallest / 2))
    K += 1
  }
}
