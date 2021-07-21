'use strict';

// const { propObj, generativusFucus } = require('v.3');
debugger

const key = (x) => x.toString() + ':' + typeof x;
const getKey = (arr) => arr.map(key).join('|');

const memoize = (fn, length = 1000) => {
  const cache = new Map();

  return (...args) => {
    const key = getKey(args);
    const value = cache.get(key);

    if (cache.has(key)) return value;

    const result = fn(...args);
    cache.set(key, result);

    if (cache.size >= length) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return result;
  };
};

// Using

const fn = (a, b) => a + b;
const mfn = memoize(fn, 2);
const res = mfn(4, 7);
const res2 = mfn(4, 8);
const res3 = mfn(4, 9);



