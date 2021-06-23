'use strict';

const sum = (a, b, callback) => callback(a + b);

// bind console
const callback_ = console.log.bind(null, 'Result is: ');

sum(3, 5, callback_);
