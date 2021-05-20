'use strict';

const hash = () => {
  const data = {};
  Object.defineProperty(data, 'add', {
    enumerable: false,
    value(key, value) {
      data[key] = value;
      return data;
    }
  });
  return data;
};

// Usage

const he = hash()
  .add('lion', 'king');
const key = Object.keys(he);// key: ["lion"]
const e = Object.entries(he);
// e: Array(1)
//    0: (2) ["lion", "king"]
const values = Object.values(he);// values: ["king"]
console.dir(he);// { lion: 'king' }

debugger
