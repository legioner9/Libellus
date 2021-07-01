'use strict';

// throw cessio_args
const wrapCessioArgsAsync = (before, after, beforeCb, afterCb, fn) => (...args) => {
  debugger
  const callback = args[args.length - 1];

  if (typeof callback === 'function') {
    args[args.length - 1] = (...par) => afterCb(callback(...beforeCb(...par)));
  }
  return after(fn(...before(...args)));
};

const callback = (err, ...args) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`callback called args: [${args}]`);
};

const fn = (par1, par2, cb) => {
  if (fn.length === 1) cb('params is false');
  cb(null, par1, par2);
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

const beforeCb = (...args) => {
  // behaviour into cessio before
  console.log(`before callback args: [${args}]`);
  return args;
};

const afterCb = (res) => {
  // behaviour into cessio after
  console.log(`after callback args: [${res}]`);
  return res;
};

// Use
const wFn = wrapCessioArgsAsync(before, after, beforeCb, afterCb, fn);

const res = wFn('unus', 'duo', callback);
console.log({ res });

const wrapAsyncUno = wrapCessioArgsAsync
.bind(null, before, after, beforeCb, afterCb);

const wFnUno = wrapAsyncUno(fn);
const resUno = wFnUno('unus', 'duo', callback);
