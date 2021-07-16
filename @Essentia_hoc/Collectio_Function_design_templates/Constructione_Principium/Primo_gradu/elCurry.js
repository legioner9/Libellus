'use strict';

const curry = (fn) => (...args) => {
  if (fn.length <= args.length) return fn(...args);
  else return curry(fn.bind(null, ...args));
};
