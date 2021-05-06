'use strict';

const INTERVAL = 500;
const MAX_VALUE = 10;

let counter = 0;
let timer;

const event_ = () => {
  if (counter === MAX_VALUE) {
    console.log(timer, counter, 'the end');
    clearInterval(timer);
    return;
  }
  console.dir({ counter, date: new Date() }, {
    depth: 2,
    colors: true
  });
  counter++;

};
debugger
timer = setInterval(event_, INTERVAL);
