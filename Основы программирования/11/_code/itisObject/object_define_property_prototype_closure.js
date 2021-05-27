'use strict';

const Nob = function(closure = {
  a: 0,
  b: []
}) {
  this.descriptors_ = {
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
  return Object.defineProperties({}, this.descriptors_);
};

const a = new Nob();
debugger
a.pr_a = 6;
