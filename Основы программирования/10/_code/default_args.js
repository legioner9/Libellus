'use strict';

const a = (x = '', y = true, z = {}) => {
  x++;
  y++;
  z++;
  // x: 1
  // y: 2
  // z: NaN
};

a();
