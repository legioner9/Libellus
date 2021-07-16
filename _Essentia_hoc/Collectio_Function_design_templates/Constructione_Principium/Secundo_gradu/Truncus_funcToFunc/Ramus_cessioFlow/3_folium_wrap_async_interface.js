'use strict';

const wrap = require('./2_folium_cessio_args_callback');

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

const wrapInterface = (interFace) => {
  debugger
  const wrapObject = {};
  const keys = Object.keys(interFace);
  keys.forEach((key) => {
    wrapObject[key] = wrap(interFace[key]);
  });
  return wrapObject;
};

wrapInterface(anInterface);

debugger
