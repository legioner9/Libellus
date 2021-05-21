'use strict';
debugger
const add = x => {
  const f = d => add(x + d);
  f.map = fn => {
    fn(x);
    return f;
  };
  return f;
};
const a = add(5);
const a1 = a(2);
const a2 = a1(4);
const a3 = a2(6);
const a4 = a3(7);
const a5 = a4.map(console.log);
const a6 = a5(55);

[a, a1, a2, a3, a4, a5, a6].map(fn => fn.map(console.log));
//5
// functor.js:6 7
// functor.js:6 11
// functor.js:6 17
// 2functor.js:6 24
// functor.js:6 79
debugger

