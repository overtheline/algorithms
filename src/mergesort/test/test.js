const expect = require('chai').expect;
const mergesort = require('../mergesort');

describe('mergesort', function() {
  it('sorts data', function() {
    const data = [2, 8, 7, 1, 3, 5, 6, 4];
    const result = mergesort(data);

    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i] <= result[i + 1]).to.be.true;
    }
  });
});
