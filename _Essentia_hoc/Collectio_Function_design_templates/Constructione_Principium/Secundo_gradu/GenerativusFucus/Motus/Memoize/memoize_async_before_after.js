'use strict';

const memoizeAsync = (fn, length = 2) => {
  const cache = new Map();
  const memoized = (...args) => {
    const callback = args.pop();
    const key = args[0];
    const value = cache.get(key);
    if (cache.has(key)) {
      console.log(`cache key ${key}`);
      return callback(value.err, value.data);
    }
    fn(...args, (err, data) => {
      cache.set(key, { err, data });
      if (cache.size >= length) {
        const firstKey = cache.keys().next().value;
        console.log(`cache deleted ${firstKey}`);
        cache.delete(firstKey);
      }
      console.log(`callback arg ${args}`);
      callback(err, data);
    });
  };
  return memoized;
};

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;
const mfn = memoizeAsync(fn);

mfn(1, callback);
mfn(1, callback);
debugger
mfn(2, callback);
debugger
