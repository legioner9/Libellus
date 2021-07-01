'use strict';

// throw cessio_args
const wrap_cessio_args = (before, after, fn) => (...args) => after(fn(...before(...args)));

const fn = (par1, par2) => {
  console.dir({ method: { par1, par2 } });
  return [par1, par2];
};

const before = (...args) => {
  // behaviour into cessio before
  console.log(`before args: [${args}]`);
  return args;
};

const after = (arg) => {
  // behaviour into cessio after
  console.log(`after args: [${arg}]`);
  return arg;
};

// Use

const wFn = wrap_cessio_args(before, after, fn);
console.log(wFn('unus', 'duo'));
