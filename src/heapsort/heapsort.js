class Heapsort {
  constructor(data) {
    this.heap = data.slice();
  }

  parent(i) {
    return Math.floor(i / 2);
  }

  left(i) {
    return 2 * i;
  }

  right(i) {
    return 2 * i + 1;
  }

  maxHeapify(a, i) {
    const l = this.left(i);
    const r = this.right(i);
    let largest;

    if (l < a.heap_size && a[l] > a[i]) {
      largest = l;
    } else {
      largest = i;
    }

    if (r <= a.heap_size && a[r] > a[largest]) {
      largest = r;
    }

    if (largest !== i) {
      let temp = a[i];
      a[i] = a[largest];
      a[largest] = temp;

      this.maxHeapify(a, largest);
    }
  }

  buildMaxHeap() {
    this.heap.heap_size = this.heap.length - 1;
    for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
      this.maxHeapify(this.heap, i);
    }
  }

  maxHeapProperty() {
    let result = true;

    for (let i = 0; i < this.heap.length; i++) {
      if (result) {
        result = this.heap[this.parent(i)] >= this.heap[i];
      }
    }

    return result;
  }

  heapMaximum() {
    this.buildMaxHeap();
    return this.heap[0];
  }

  heapExtractMax() {
    this.buildMaxHeap();

    if (this.heap.heap_size < 0) {
      return 'error'
    }

    const max = this.heap[0];

    this.heap[0] = this.heap[this.heap.heap_size];
    this.heap.heap_size = this.heap.heap_size - 1;
    this.heap.pop();
    this.maxHeapify(this.heap, 0);
    return max;
  }

  heapIncreaseKey(i, key) {
    if (key < this.heap[i]) {
      return 'error';
    }

    this.heap[i] = key;
    while (i > 1 && this.heap[this.parent(i)] < this.heap[i]) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[this.parent(i)];
      this.heap[this.parent(i)] = temp;
      i = this.parent(i);
    }
  }

  maxHeapInsert(key) {
    this.buildMaxHeap(this.heap);
    this.heap.heap_size++;
    this.heap[this.heap.heap_size] = -Infinity;
    this.heapIncreaseKey(this.heap.heap_size, key);
  }

  sort() {
    this.buildMaxHeap(this.heap);
    for (let i = this.heap.length - 1; i >= 1; i--) {
      const temp = this.heap[0];
      this.heap[0] = this.heap[i];
      this.heap[i] = temp;
      this.heap.heap_size = this.heap.heap_size - 1;
      this.maxHeapify(this.heap, 0);
    }
    return this.heap;
  }
}

module.exports = Heapsort;
