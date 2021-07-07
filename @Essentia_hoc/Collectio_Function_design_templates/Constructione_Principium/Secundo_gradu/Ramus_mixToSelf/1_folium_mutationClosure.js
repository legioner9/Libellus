'use strict';

const limit = (max, fn) => {
  let counter = 0;
  const closureObj = { counter, max };



  return (...args) => {
    fn.args = args;
    fn.closureObj = closureObj;

    counter++;

    console.dir({ fn, args, closureObj });
    if (counter < max) return fn(...args);
  };
};

const fn = (...args) => ({ args });
const wrapFn = limit(1, fn);

// test area:
console.log(`test first call: ${wrapFn('primus')} , with closure: ${wrapFn.closureObj}`);
console.log(`test second call: ${wrapFn('secundus')} , with closure: ${wrapFn.closureObj}`);

