'use strict';

const f = (...args) => {
  args.forEach(arg => {
    const type = typeof arg;
    console.log('Type = ' + type);
    if (type === 'object') {
      console.log('Value: ' + JSON.stringify(arg));
    } else {
      console.log('Value: ' + arg);
    }
  });
};

f(1, 'Ave', { any: 'ant' });
//Type = number
// Value: 1
// Type = string
// Value: Ave
// Type = object
// Value: {"any":"ant"}
