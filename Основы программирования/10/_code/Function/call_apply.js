'use strict';

const a = function (x, y) {
  const b=this.b; // b: "bb"
  debugger
  console.log(`x = ${x} , y = ${y}`);
};

a.call({ b: 'bb' }, 1, 2);

