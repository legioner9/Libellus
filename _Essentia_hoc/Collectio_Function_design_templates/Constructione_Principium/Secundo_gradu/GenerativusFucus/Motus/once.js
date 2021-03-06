'use strict';

const { propObj, generativusFucus } = require('v.1');

propObj.returnBfn = (bfn, closureForFn) => {
  if (!closureForFn.flags.kill) {
    closureForFn.flags.kill = true;
    return bfn;
  } else return () => undefined;
};

const fn = function(...args) {
  console.dir({ args, this: this });
};

// Use
debugger
const fucus = generativusFucus(propObj, fn);
fucus('a');// call
fucus('b');// return undefined


debugger
