'use strict';

const a = 1;
console.log('first a =', a);

function fo() {

  const a = 2;
  console.log('second a =', a);
  {
    const a = 3;
    console.log('third a =', a);
  }
}

fo();
