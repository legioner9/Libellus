'use strict';

const a = 25;
const f = x => a * x;
console.log(f(2));

const o = {
  b: 'b',
  f1: function(x) {
    debugger // this === o
    console.log(`this f1 = ${this}`, `args = ${arguments[0]}, x = ${x}`);
  },
  f2: x => {
    debugger // this === {}
    console.log(`this f1 = ${this}`, `args = ${arguments[0]}, x = ${x}`);
  }

};

const f3 = () => {
  const c = 'c';
  const f4 = function() {
    debugger
    console.log(this);
  };
  f4();
};

o.f1(100);
o.f2({ a: 'aa' });
f3();
