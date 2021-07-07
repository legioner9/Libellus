'use strict';

const once = (fn) => {
  return (...args) => {
    if (!fn) return;
    const res = fn(...args);
    fn = null;
    return res;
  };
};

const fn = (...args) => console.dir({ args });

const onceFn = once(fn);

onceFn('unus');
onceFn('duo');

