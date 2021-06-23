'use strict';

// applying callback

const appCallback = (par, callback) => {
  // error part
  if (!par) {
    callback(new Error('Parameter missing'));
    return false;
  }
  // callback part
  callback(null, par);
  return true;
};

// Using
debugger
const res = appCallback('Data', (err, data) => {
  if (err) throw err;
  console.dir({ data });
});

console.dir({ res });

