'use strict';

debugger
const a = 25;
const f = x => {
  debugger //this: undefined.
};

function f1(x) {
  debugger //this: undefined.
}

const o = {
  b: 'b',
  f1: function(x) {
    debugger // this === o
    console.log(`this f1 = ${this}`, `args = ${arguments[0]}, x = ${x}`);
  },
  f2(x) { // f1 === f2
    debugger // this === o
  },
  f3: x => {
    debugger // this === {}
    console.log(`this f1 = ${this}`, `args = ${arguments[0]}, x = ${x}`);
  }

};

const f2 = function(x) {

  const c = 'c';
  return {
    im:'im',
    f1() {
      this.c = c;
      this.x = x;
      debugger
      // this: Object
      // c: "c"
      // f1: f1() { this.c = c; this.x = x; debugger // this: Object // c: "c" // f1: ƒ f1() // f2: () => {…}
      //   f2: () => { debugger }
      //   im: "im"
      //   x: 1
      //  Closure (f2)
      // c: "c"
      // x: 1
    },
    f2: () => {
      debugger //this: undefined
    //  Closure (f2)
      // c: "c"
      // x: 1
    },
  };
};

const f3 = (x = 0) => ({
  a: { b: 'bb' },
  meth() {
    this.x = x;
    debugger
    return this;
  }
});

o.f1(100);
o.f2({ a: 'aa' });
o.f3();

f(1);
f1(1);

f2(1).f1();
f2(1).f2();
const xx = f3(1).meth().x;

module.exports = { f };
