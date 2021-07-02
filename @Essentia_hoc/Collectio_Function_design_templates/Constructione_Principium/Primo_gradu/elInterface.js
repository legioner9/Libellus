'use strict';

const anInterface = {
  methodSync(par1, par2) {
    console.log({ methodSync: [par1, par2] });
    return [par1, par2];
  },
  methodAsync(pars, callback) {
    debugger
    console.log({ methodAsync: { pars, callback } });
    if (!pars) callback(
      new Error(`pars: ${pars} not allowed`));
    callback(null, pars);
  }
};

const cb = (a, b) => console.dir({ a, b });

anInterface.methodAsync(4, cb);
anInterface.methodAsync(0, cb);
