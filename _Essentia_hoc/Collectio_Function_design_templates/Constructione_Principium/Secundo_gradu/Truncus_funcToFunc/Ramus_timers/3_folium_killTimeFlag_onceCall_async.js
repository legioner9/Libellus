'use strict';

const wrapKillTimeFlag = (delay, fn) => {
  // define flag
  let killFlag = false;
  const timeout = setTimeout(() => {
    // console.log('from timeOut');
    killFlag = true;
  }, delay);

  return (...args) => {
    // console.dir({ flag: killFlag, args });
    // close timeout
    timeout.close();
    if (killFlag) return;
    // add once_call behaviour
    killFlag = true;
    fn(...args);
  };
};

// Using

const fn = (arrArgs, callback) => {
  console.dir({ fn, arrArgs, callback });
  let err = null;
  if (arrArgs[0] === 0) err = new Error('arrArgs[0] === 0');
  callback(err, arrArgs);
};

const callback = (err, arrArgs) => {
  if (err) throw err;
  console.dir({ callback, arrArgs });
};

const wrap100 = wrapKillTimeFlag(100, fn);// dying of 100 ms
const wrap1000 = wrapKillTimeFlag(1000, fn);// dying of 1000 ms

setTimeout(() => {
  wrap100(['defectum'], callback);
  // wrap1000([0], callback); error check
  wrap1000(['successus'], callback);
}, 500);


module.exports = wrapKillTimeFlag;
