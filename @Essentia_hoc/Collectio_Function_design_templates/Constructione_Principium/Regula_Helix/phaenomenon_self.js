'use strict';

//

const adder = initial => {
  // define closure
  let value = initial;
  // define fn_object
  const add = delta => {
    value += delta;
    // behavior: 'dependence_from_self_props'
    if (value >= add.maxValue) add.maxEvent(value);
    return add;
  };
  // add 'add_to_self_props' method to fn_object
  add.max = (max, event) => {
    // define property fn_object
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};

// Usage

const maxReached = value => {
  console.log('max value reached, value: ' + value);
};
// chain call
const a1 = adder(10).max(100, maxReached)(-12);

a1(25);
a1(50);
a1(75);
a1(100);
a1(-200)(50)(30);
