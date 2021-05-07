'use strict';

const rangeOdd = (start, end) => {
  const length = end - start;
  const arr = [];
  for (let i = 0; i <= length; i++) {
    const si = start + i;
    if (si % 2 !== 0) arr.push(si);
  }
  return arr;
};

module.exports = { rangeOdd };
