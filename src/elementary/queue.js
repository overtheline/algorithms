class Queue {
  constructor() {
    this.queue = [];
    this.len = 10;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(x) {
    if (
      this.head === 0 && this.tail === this.len - 1
      || this.tail + 1 === this.head
    ) {
      return new Error('overflow');
    }
    this.queue[this.tail] = x;
    if (this.tail === this.len - 1) {
      this.tail = 0
    } else {
      this.tail += 1;
    }
    return x;
  }

  dequeue() {
    if (this.head === this.tail) {
      return new Error('underflow');
    }

    const x = this.queue[this.head];
    if (this.head === this.len - 1) {
      this.head = 0;
    } else {
      this.head += 1;
    }

    return x;
  }
}

module.exports = Queue;
