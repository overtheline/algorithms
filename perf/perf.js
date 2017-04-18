const countingsort = require('../countingsort/countingsort');
const quicksort = require('../quicksort/quicksort');
const mergesort = require('../mergesort/mergesort');
const buildData = require('../utils/data');
const Timer = require('../utils/timer');

function perf() {
  const data = buildData(990000, 0, 100000);

  const timerQuick = new Timer();
  timerQuick.start();
  for (let i = 0; i < 23; i++) {
    quicksort(data);
    timerQuick.lap();
  }
  timerQuick.stop();
  console.log('quicksort', timerQuick.getStats());

  const timerCount = new Timer();
  timerCount.start();
  for (let j = 0; j < 23; j++) {
    countingsort(data);
    timerCount.lap();
  }
  timerCount.stop();
  console.log('countingsort', timerCount.getStats());

  const timerMerge = new Timer();
  timerMerge.start();
  for (let k = 0; k < 23; k++) {
    mergesort(data);
    timerMerge.lap();
  }
  timerMerge.stop();
  console.log('mergesort', timerMerge.getStats());
}

module.exports = perf;
