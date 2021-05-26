'use strict';

const obj = Object.defineProperty({}, 'a', {
    value: 'aa'
  }
);

let gs = 0;

const obj_1 = Object.defineProperties({}, {
  a: {
    value: 0,
    writable: true,
  },
  b: {
    get() {
      debugger
      return this.a * 2;
    },
  },
  sum: {
    get() {
      debugger
      return this.a + this.b;
    },
  },
});
debugger

obj_1.a = 6;// a = 6, b = 12
const s = obj_1.sum;// s = 18
