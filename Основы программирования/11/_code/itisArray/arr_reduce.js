'use strict';

const log = (a, b) => {
  console.log(`index = ${b} \t value = ${a}`);
  return a;
};

const arr = [4, 5, 8, 1];

const rra = arr.map(log);
debugger
