'use strict';

const stateObject = (...args) => {
  // define closure
  const closure = 'closure';
  // define stateObject
  const stateObj = {
    args,
    closure,
    printThis() {
      console.dir(this);
    }
  };
  // return state
  return stateObj;
};

const state = stateObject('a');
state.printThis();
debugger
