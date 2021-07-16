'use strict';

const decorator = (object) => {
  object.property = object.property || 0;
  object.method = function(number) {
    return this.property + number;
  };
  return object;
};

const object = decorator({});
object.property = 5;
const result = object.method(4);

console.log('result is', result);
