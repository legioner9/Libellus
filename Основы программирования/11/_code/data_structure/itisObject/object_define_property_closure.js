'use strict';

const descriptors = {
  closure: {
    value: { a: 0, b: [] },
  },
  pr_a: {
    set(x) {
      if (typeof x === 'number') this.closure.a = x;
      else throw TypeError('pr_a not number');
    },
    get() {
      return this.closure.a;
    }
  }

};

const ob = Object.defineProperties({}, descriptors);
debugger
