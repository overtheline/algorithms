function bubblesort(data) {
  let n = data.length;
  result = data.slice();

  while (n) {
    for (let i = 0; i < n - 1; i++) {
      if (result[i] > result[i + 1]) {
        const temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
      }
    }
    n--;
  }

  return result;
}

module.exports = bubblesort;
