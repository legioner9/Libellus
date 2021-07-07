'use strict';

const limit = (max = 0, fn = (a) => a) => {
  let counter = 0;
  return (...args) => {
    if (max && counter <= max) {
      counter++;
      return fn(...args);
    }
  };
};

const fn = (...args) => console.dir({ args });

const fn2 = limit(2, fn);
