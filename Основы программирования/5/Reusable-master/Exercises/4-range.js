'use strict';

const range = (start, end) => {
  const length = end - start;
  const arr = [];
  for (let i = 0; i <= length; i++) {
    arr[i] = start + i;
  }
  return arr;
};

module.exports = { range };
