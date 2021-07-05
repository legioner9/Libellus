'use strict';

const wrapKillTimteFlag = (delay, fn) => {
  // define flag
  let killFlag = false;
  const timeout = setTimeout(function() {
    console.dir(this);
    killFlag = true;
  }, delay, 'args');

  return (...args) => {
    console.dir({ flag: killFlag, args });
    if (!killFlag) return;
    // close timeout
    timeout.close();
    fn(...args);
  };
};

wrapKillTimteFlag(1000, () => {
})('e');
