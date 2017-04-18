const expect = require('chai').expect;
const Heapsort = require('../heapsort');
const buildData = require('../../utils/data');

describe('Heapsort', function() {
  describe('buildMaxHeap', function() {
    it('should pass max-heap-property', function() {
      const data = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
      const heapsort = new Heapsort(data);
      heapsort.buildMaxHeap();
      expect(heapsort.maxHeapProperty()).to.be.true;
    });

    it('should pass max-heap-property', function() {
      const data = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16];
      const heapsort = new Heapsort(data);
      heapsort.buildMaxHeap();
      expect(heapsort.maxHeapProperty()).to.be.true;
    });
  });

  describe('sort', function() {
    it('should return new sorted array', function() {
      const data = [5, 13, 2, 25, 7, 17, 20, 8, 4];
      const heapsort = new Heapsort(data);
      const result = heapsort.sort();
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i] <= result[i + 1]).to.be.true;
      }
      expect(data !== result);
    });

    it('should return new sorted array', function() {
      const data = buildData(100, 0, 100);
      const heapsort = new Heapsort(data);
      const result = heapsort.sort();
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i] <= result[i + 1]).to.be.true;
      }
      expect(data !== result);
    });
  });

  describe('heapMaximum', function() {
    it('should return the max element', function() {
      const data = [5, 13, 2, 25, 7, 17, 20, 8, 4];
      const heapsort = new Heapsort(data);
      for (let i = 0; i < data.length; i++) {
        expect(heapsort.heapMaximum() >= data[i]).to.be.true;
      }
    });
  });

  describe('heapExtractMax', function() {
    it('should extract the max element', function() {
      const data = [5, 13, 2, 25, 7, 17, 20, 8, 4];
      const heapsort = new Heapsort(data);

      const max1 = heapsort.heapExtractMax();

      for (let i = 0; i < heapsort.heap.heap_size; i++) {
        expect(max1 >= heapsort.heap[i]).to.be.true;
      }

      const max2 = heapsort.heapExtractMax();
      for (let i = 0; i < heapsort.heap.heap_size; i++) {
        expect(max2 >= heapsort.heap[i]).to.be.true;
      }

      expect(max1 > max2).to.be.true;
    });
  });

  describe('maxHeapInsert', function() {
    it('should insert a key into the heap and sort', function() {
      const data = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1];
      const heapsort = new Heapsort(data);
      const key = 10;
      heapsort.maxHeapInsert(key);
      const result = heapsort.sort();
      let isInsertKey = false;
      for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === key || result[i + 1] === key) isInsertKey = true;
        expect(result[i] <= result[i + 1]).to.be.true;
      }
      expect(isInsertKey).to.be.true;
    });
  });
});
