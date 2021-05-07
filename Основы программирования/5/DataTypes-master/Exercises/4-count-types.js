'use strict';

const countTypesInArray = (arr) => {
  const hash = {};
  for (const item of arr) {
    const type = typeof item;
    const count = hash[type] || 0;
    hash[type] = count + 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
