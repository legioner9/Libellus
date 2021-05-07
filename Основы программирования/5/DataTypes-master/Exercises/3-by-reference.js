'use strict';

const inc = (N) => {
  if (typeof N === 'object') N.n++;
};

module.exports = { inc };
