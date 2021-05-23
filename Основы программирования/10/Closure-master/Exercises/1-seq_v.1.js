'use strict';

const seq = (f) => {
  const closure = {};
  closure.arr_fn = [];
  const ch_fn = f => {
    const type = typeof f;
    closure.arr_fn.unshift(f);
    if (type === 'function') {
      return ch_fn;
    } else {
      if (type === 'number') {
        return closure.arr_fn.reduce((a,b) => b(a));
      } else {
        throw Error('type error');
      }

    }
  };
  ch_fn(f);
  return ch_fn;
};

const f1 = d => d + 2;
const f2 = d => d * 2;
const f3 = d => d / 2;

debugger
const s = seq(f1)(f2)(f3)(4);

module.exports = { seq };
