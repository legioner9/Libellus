'use strict';

// Child of elClosure

const init_cache = () => {
  // modify obj_closure - closure block
  const cache = {};
  // using inner_args - main_function block
  return (key) => {
    // return from cache
    let res = cache[key];
    // check in cache
    if (!res) {
      // return from function
      res = `key: ${key}`;
      // add to cache
      cache[key] = res;
    }
    // return main result
    return res;
  };
};

// Using
debugger
const fn = init_cache();
const res_1 = fn(1);
const res_2 = fn(1);

console.dir({ res_1, res_2 });
