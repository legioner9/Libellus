'use strict';

const adder = a => ({
  add(b) {
    return adder(a + b);
  },
  value(fn) {
    fn(a);
    return adder(a);
  },
});
debugger
const a = adder(2).add(5).value(console.log).add(55);
