'use strict';

const wrapFlag = (fn) => {
  // define flag
  const flag = Math.random() > .5;
  return (...args) => {
    // define behaviour according flag
    if (flag) return;
    return fn(flag, ...args);
  };
};

const fn = (...args) => console.dir(args);

wrapFlag(fn)('causa');
