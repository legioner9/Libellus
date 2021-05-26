'use strict';

const nob = function(closure = {
  a: 0,
  b: []
}) {
  const descriptors_ = {
    pr_a: {
      set(x) {
        debugger
        if (typeof x === 'number') closure.a = x;
        else throw TypeError('pr_a not number');
      },
      get() {
        debugger
        return closure.a;
      },
    },
  };
  return Object.defineProperties({}, descriptors_);
};

const a = nob();
debugger
a.pr_a = 6;
