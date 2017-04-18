class Timer {
  constructor() {
    this._start = 0;
    this._lap = [];
    this._end = 0;

    this.on = false;
  }

  start() {
    if (this.on) return;
    this._start = new Date().getTime();
    this.on = true;
  }

  stop() {
    if (!this.on) return;
    this._end = new Date().getTime() - this._start;
    this.on = false;
  }

  lap() {
    if (!this.on) return;
    this._lap.push(new Date().getTime() - this._start);
  }

  getStats(long) {
    if (this.on) return;
    const result = {
      end: this._end,
      ave: this._end / (this._lap.length + 1),
    };
    if (long) {
      this._lap.forEach((l, i) => {
        result[`lap_${i + 1}`] = l;
      });
    }

    return result;
  }
}

module.exports = Timer;
