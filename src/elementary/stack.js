class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  stackEmpty() {
    if (this.top == -1) {
      return true;
    }

    return false;
  }

  push(x) {
    this.top += 1;
    this.stack[this.top] = x;
    return x;
  }

  pop() {
    if (this.stackEmpty()) {
      return new Error('underflow');
    } else {
      this.top -= 1;
    }

    return this.stack[this.top + 1];
  }
}

module.exports = Stack;
