'use strict';

const crypto = require('crypto');

const getKey = (x) => x.toString() + ':' + typeof x;

const generateKey = (arr) => {
  const key = arr.map(getKey).join('|');
  return crypto.createHash('sha256').update(key).digest('hex');
};

const Memoized = function() {
};

const memoizeAsync = (fn, length = 2) => {
  const cache = new Map();
  const memoized = (...args) => {
    const callback = args.pop();
    const key = generateKey(args);
    const value = cache.get(key);
    if (cache.has(key)) {
      console.log(`from cache key: ${key}`);
      return callback(value.err, value.data);
    }
    fn(...args, (err, data) => {
      cache.set(key, { err, data });
      if (cache.size >= length) {
        const firstKey = cache.keys().next().value;
        console.log(`cache deleted key: ${firstKey}`);
        cache.delete(firstKey);
      }
      console.log(`callback called with args: ${err},${data}`);
      callback(err, data);
    });
  };
  const props = {
    cache,
    timeout: 0,
    limit: 0,
    size: 0,
    maxSize: 0,
  };
  Object.setPrototypeOf(memoized, Memoized.prototype);
  return Object.assign(memoized, props);
};

Memoized.prototype.clear = function() {
  this.cache.clear();
};

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;
const mfn = memoizeAsync(fn);

mfn(1, callback);
debugger
mfn.clear();
mfn(1, callback);
mfn(1, callback);
debugger
mfn(2, callback);
debugger
