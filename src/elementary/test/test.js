const expect = require('chai').expect;
const Stack = require('../stack');
const Queue = require('../queue');

const stk = new Stack();

describe('Stack', () => {
  it('is empty', () => {
    expect(stk.stackEmpty()).to.be.true;
  });

  it('pushes', () => {
    stk.push(5);
    expect(stk.stackEmpty()).to.be.false;
  });

  it('pops', () => {
    expect(stk.pop()).to.equal(5);
    expect(stk.stackEmpty()).to.be.true;
  });

  it('returns an error', () => {
    expect(stk.pop()).to.be.an('error');
  });
});

const q = new Queue();

describe('Queue', () => {
  it('enqueues', () => {
    q.enqueue(5);
    expect(q.tail).to.equal(1);
  });

  it('dequeues', () => {
    expect(q.dequeue()).to.equal(5);
    expect(q.tail).to.equal(1);
    expect(q.head).to.equal(1);
  });
});

for (let i = 0; i < 20; i++) {
  
}
