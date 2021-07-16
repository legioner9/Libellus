'use strict';

const { propObj, generativusFucus } = require('v.1');
propObj.preComutClosure = (closureForFn) => {
  closureForFn.timer.timeout = setTimeout(() => {
    closureForFn.flags.kill = true;
  }, closureForFn.time.msec);
  return closureForFn;
};

propObj.returnBfn = (bfn, closureForFn) => {
  if (!closureForFn.flags.kill) {
    return bfn;
  } else return () => undefined;
};

const fn = function(...args) {
  console.dir({ args, this: this });
};

propObj.closureForFn.time.msec = 300;

debugger
const fucus300 = generativusFucus(propObj, fn);// start lifetime 300

setTimeout(() => {
  debugger
  const res = fucus300('100');// still alive
}, 100);

setTimeout(() => {
  fucus300('500');// died
}, 500);
