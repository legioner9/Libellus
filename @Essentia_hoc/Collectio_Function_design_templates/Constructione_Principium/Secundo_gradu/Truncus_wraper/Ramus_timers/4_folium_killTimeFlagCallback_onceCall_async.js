'use strict';

const wrapKillTimeFlagCallback = (delayCallback, fn) => {
  // define flag
  let killFlag = false;

  const timeout = setTimeout(() => {
    killFlag = true;
  }, delayCallback);

  return (...args) => {
    const callback = args[args.length - 1];
    if (typeof callback === 'function') {
      args[args.length - 1].flag = killFlag;
      timeout.close();
    }
    fn(...args);
  };
};

// Using

const fn = (arrArgs, callback) => {
  console.dir({ fn, arrArgs, callback });
  let err = null;
  if (arrArgs[0] === 0) err = new Error('arrArgs[0] === 0');
  if (!callback.flag) callback(err, arrArgs);
};

const callback = (err, arrArgs) => {
  if (err) throw err;
  console.dir({ callback, arrArgs });
};

const wrap100 = wrapKillTimeFlagCallback(100, fn);// dying of 100 ms
const wrap1000 = wrapKillTimeFlagCallback(1000, fn);// dying of 1000 ms

setTimeout(() => {
  wrap100(['defectum'], callback);// don't call callback
  // wrap1000([0], callback); error check
  wrap1000(['successus'], callback);// call callback
}, 500);


module.exports = wrapKillTimeFlagCallback;
