'use strict';

const powName = 'pow';

const obj = {
  f: function inc(a) {// name: "inc"
    return ++a;
  },
  sum: function(a, b) {
    return a + b;
  },
  inc(a) {
    return ++a;
  },
  max: (a, b) => {
    return a > b ? a : b;
  },
  min: (a, b) => (a < b ? a : b),
  dec: a => --a,
  [powName](a, b) {
    return Math.pow(a, b);
  },
};

console.dir(obj);
debugger
