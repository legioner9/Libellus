'use strict';

const wrapKillTimteFlag = (delay, fn) => {
  // define flag
  let flag = false;
  const timeout = setTimeout(function() {
    console.dir(this);
    flag = true;
  }, delay, 'args');
  // timeout.close();
  debugger
  return (...args) => {
    console.dir({ flag, args });
  };
};

wrapLifeTimteFlag(1000, () => {
})('e');
