function mergesort(data) {
  if (data.length > 1) {
    const result = [];
    const mid = Math.floor(data.length / 2);
    const left = mergesort(data.slice(0, mid));
    const right = mergesort(data.slice(mid));
    let li = 0;
    let ri = 0;
    while (li < left.length && ri < right.length) {
      if (left[li] < right[ri]) {
        result.push(left[li]);
        li++;
      } else {
        result.push(right[ri]);
        ri++;
      }
    }
    result.concat(left);
    result.concat(right);

    return result;
  }

  return data;
}

module.exports = mergesort;
