'use strict';

const fn = (f, ...args) => (...par) => f(...args, ...par);


