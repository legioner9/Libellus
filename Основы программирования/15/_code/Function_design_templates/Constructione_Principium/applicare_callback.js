'use strict';

// applying callback

const appCallback = (par, callback) => {
  // error part - call with error
  if (!par) {
    callback(new Error('Parameter missing'));
    return false;
  }
  // callback part - call with parameter
  callback(null, par);
  return true;
};

// Using
debugger
const res = appCallback('Data', (err, data) => {
  // treat error
  if (err) throw err;
  // treat data
  console.dir({ data });
});

console.dir({ res });

