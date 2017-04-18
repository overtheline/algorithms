const expect = require('chai').expect;
const countingsort = require('../countingsort');
const buildData = require('../../utils/data');

describe('countingsort', function() {
  it('sorts data', function() {
    const data = [2, 5, 3, 0, 2, 3, 0, 3];
    const result = countingsort(data, 5);

    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i] <= result[i + 1]).to.be.true;
    }
  });

  it('sorts data', function() {
    const data = buildData(100, 0, 100);
    const result = countingsort(data, 5);

    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i] <= result[i + 1]).to.be.true;
    }
  });
});
