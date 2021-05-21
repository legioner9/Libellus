'use strict';

const adder = x => {
  const obj = {};
  let fnZero = null;
  const value = fn => {
    fn(x);
    return adder(x);
  };
  const add = y => {
    let z = x + y;
    if (z < 0) {
      if (fnZero) fnZero();
      z = 0;
    }
    return adder(z);
  };
  const once = (name, callback) => {
    if (name === 'zero') fnZero = callback;
    return obj;
  };
  return Object.assign(obj, { value, add, once });
};
debugger
const a = adder(4)
  .add(6)
  .once('zero', () => console.log('zero'))
  .add(-22)
  .add(-2);
