'use strict';

const iterate = (array, listener) => {
  let count = 0;

  const sim = setInterval(() => {
    listener(array[count++]);
    if (count === array.length) clearInterval(sim);
  }, 1000);
};

const city = ['Moscow', 'Paris', 'Beijing'];

const print = (city) => console.log(city);

iterate(city, print);
