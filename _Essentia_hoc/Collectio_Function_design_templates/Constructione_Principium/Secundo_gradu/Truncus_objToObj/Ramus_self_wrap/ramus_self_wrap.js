'use strict';
const addExist = (object) => {
  object.method = () => {
    console.dir({ object });
    return object;
  };
  return object;
};

const lazyExist = (object) => {
  const method = object.method;
  object.method = () => {
    setImmediate(() => {
      method();
    }, object);
  };
  return object;
};

const a = { a: 'a' };

console.log('addExist');
const a1 = addExist(a).method();

lazyExist(a1).method();
console.log('after lazyExist');
