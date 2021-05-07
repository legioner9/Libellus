'use strict';

const average = (a, b) => (a + b) / 2;

const square = d => d ** 2;

const cube = d => d ** 3;

const calculate = () => {
  const arr = [];
  for (let i = 0; i <= 9; i++) {
    arr.push(average(square(i), cube(i)));
  }
  return arr;
};

module.exports = { square, cube, average, calculate };

