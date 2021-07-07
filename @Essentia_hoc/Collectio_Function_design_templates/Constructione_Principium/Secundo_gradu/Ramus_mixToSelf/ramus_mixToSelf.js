'use strict';

const mixArgs = (...args) => {
  mixArgs.args = args;
  console.dir({ mixArgs, args });
};

mixArgs('a');
debugger
