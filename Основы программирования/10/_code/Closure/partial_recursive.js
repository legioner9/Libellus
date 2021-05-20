'use strict';

const add = x => y => {
  const sum = x + y;
  add.sum = sum;
  debugger
  return add(sum);
};
const a = add(3)(7);
const sum = add.sum;// sum: 10
debugger
