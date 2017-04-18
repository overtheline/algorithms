function buildData(size, min, max) {
  const data = [];

  for (let i = 0; i < size; i++) {
    data.push(Math.floor((max - min) * Math.random()) + min);
  }

  return data;
}

module.exports = buildData;
