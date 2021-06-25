'use strict';

const iterate = (array, listener) => {
  for (const item of array) listener(item);
};

const city = ['Moscow', 'Paris', 'Beijing'];

const print = (city) => console.log(city);

iterate(city, print);
