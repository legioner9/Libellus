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
    // timeout.close();
    if (killFlag) return;
    // add once_call behaviour
    // killFlag = true;
    fn(...args);
  };
};

// Using

const fn = (...args) => {
  console.dir({ fn: 'fn', args });
};

const wrap100 = wrapKillTimeFlag(100, fn);// dying of 100 ms
const wrap1000 = wrapKillTimeFlag(1000, fn);// dying of 1000 ms

setTimeout(() => {
  wrap100('defectum');
  wrap1000('successus');
  wrap1000('successus');
}, 500);

module.exports = wrapKillTimeFlag;
