'use strict';

// throw cessio_args
const wrapCessioArgs = (before, after, fn) => (...args) => after(fn(...before(...args)));

const fn = (par1, par2) => {
  console.dir({ method: { par1, par2 } });
  return [par1, par2];
};

const before = (...args) => {
  // behaviour into cessio before
  console.log(`before args: [${args}]`);
  return args;
};

const after = (res) => {
  // behaviour into cessio after
  console.log(`after args: [${res}]`);
  return res;
};

// Use
const wFn = wrapCessioArgs(before, after, fn);

const res = wFn('unus', 'duo');
console.log({ res });
