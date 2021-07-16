'use strict';

debugger
const limit = (max, fn) => {
  let counter = 0;

  const wrapper = (...args) => {

    const closureObj = { counter, max };
    wrapper.args = args;
    wrapper.closureObj = closureObj;

    console.dir({ fn, args, closureObj });
    if (counter < max) {
      counter++;
      return fn(...args);
    }
  };
  return wrapper;
};

const fn = (...args) => ({ args });

const wrapFn = limit(1, fn);

// test area:

console.log(`test first call: ${wrapFn('primus')} , with closure: ${wrapFn.closureObj.counter}`);
console.log(`test second call: ${wrapFn('secundus')} , with closure: ${wrapFn.closureObj.counter}`);

