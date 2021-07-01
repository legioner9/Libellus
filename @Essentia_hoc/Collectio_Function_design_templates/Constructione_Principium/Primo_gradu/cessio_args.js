'use strict';

const cessio = (...args) => {
  // behaviour into cessio
  console.log(`args: [${args}]`);
  return args;
};

const fn = (par1, par2) => {
  console.dir({ method: { par1, par2 } });
  return [par1, par2];
};

// Use

fn(...cessio('unus', 'duo', 'tres'));

// console:
// args: [unus,duo,tres]
// { method: { par1: 'unus', par2: 'duo' } }
