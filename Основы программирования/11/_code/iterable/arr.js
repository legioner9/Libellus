'use strict';

const it = function(arg = { step: 2 }) {
  let index = 0;
  return {
    next: () => {
      const res = {
        done: index >= this.length,
        value: this[index],
      };
      index += arg.step;
      return res;
    }
  };

};

debugger
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
it.bind(arr);
arr[Symbol.iterator] = function(arg = { step: 2 }) {
  let index = 0;
  return {
    next: () => {
      const res = {
        done: index >= this.length,
        value: this[index],
      };
      index += arg.step;
      return res;
    }
  };

};

for (const item of arr) {
  console.log(item);
}
