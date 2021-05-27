'use strict';

const closure = {
  a: 0,
  b: []
};

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

const a = Object.defineProperties({}, descriptors_);
debugger

a.pr_a = 6;
debugger

