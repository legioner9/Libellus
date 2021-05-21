'use strict';

const adder = a => {
  const obj = {};
  let fnZero = null;
  const closure = { obj, fnZero };
  const f = x => {
    const value = fn => {
      fn(x);
      return f(x);
    };
    const add = y => {
      let z = x + y;
      if (z < 0) {
        if (closure.fnZero) closure.fnZero();
        z = 0;
      }
      return f(z);
    };
    const on = (name, callback) => {
      if (name === 'zero') closure.fnZero = callback;
      return closure.obj;
    };
    return Object.assign(obj, { value, add, on });
  };
  return f(a);
};
debugger
const a = adder(4)
  .add(6)
  .on('zero', () => console.log('zero'))
  .value(console.log)
  .add(-22)
  .add(-2)
  .value(console.log);
