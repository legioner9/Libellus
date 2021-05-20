'use strict';

const f = new Function('a, b', 'return a + b');

console.dir({
  name: f.name,
  length: f.length,
  toString: f.toString(),
});
