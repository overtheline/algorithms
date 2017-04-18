function countingsort(a, k) {
  const c = [];
  const b = [];

  for (let i = 0; i <= k; i++) {
    c[i] = 0;
  }

  for (let j = 0; j < a.length; j++) {
    c[a[j]] = c[a[j]] + 1;
  }

  for (let ix = 1; ix <= k; ix++) {
    c[ix] = c[ix] + c[ix - 1];
  }

  for (let jx = a.length - 1; jx >= 0; jx--) {
    b[c[a[jx]] - 1] = a[jx];
    c[a[jx]] = c[a[jx]] - 1;
  }

  return b;
}

module.exports = countingsort;
