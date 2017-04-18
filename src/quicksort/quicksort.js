function partition(a, p, r) {
  const x = a[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (a[j] <= x) {
      i++;

      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }

  const temp = a[i + 1];
  a[i + 1] = a[r];
  a[r] = temp;

  return i + 1;
}

function randomizedPartition(a, p, r) {
  const i = Math.floor((Math.random() * (r - p)) + p);
  const temp = a[r];
  a[r] = a[i];
  a[i] = temp;

  return partition(a, p, r);
}

function qSort(a, p, r) {
  if (p < r) {
    q = randomizedPartition(a, p, r);
    qSort(a, p, q - 1);
    qSort(a, q + 1, r);
  }
}

function quicksort(data) {
  const a = data.slice();

  qSort(a, 0, a.length - 1);

  return a;
}

module.exports = quicksort;
