'use strict';

debugger
const limit = (max, fn) => {
  let counter = 0;
  // const closureObj = { counter, max };

  const wrapper = (...args) => {
    wrapper.args = args;
    wrapper.closureObj = counter;

    console.dir({ fn, args, counter });
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

console.log(`test first call: ${wrapFn('primus')} , with closure: ${wrapFn.closureObj}`);
console.log(`test second call: ${wrapFn('secundus')} , with closure: ${wrapFn.closureObj}`);

