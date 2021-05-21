'use strict';

const adder = a => ({
  add(b) {
    if (adder._on) return  adder._on(a, b , adder);
    else return adder(a + b);
  },
  value(fn = d => d) {
    fn(a);
    return adder(a);
  },
  on(fn = d => d) {
    debugger
    adder._on = fn;
    return adder(a);
  }
});
debugger
const a = adder(2).add(5).value(console.log).add(55).on(function(a, b,thisArg) {
  if (a + b > 100) {
    debugger
    console.log(`${a}+${b} > 100 operation is canseled return ${a}`);
    return thisArg(a);
  } else return thisArg(a + b);
}).add(100).value(console.log).add(10).value(console.log);
