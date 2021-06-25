'use strict';

const events = require('events');
const emitter = new events.EventEmitter();

const cities = [];

const cb1 = (city) => {
  console.log(`add new city: ${city}`);
  cities.push(city);
};
emitter.on('new city', cb1);

const cb2 = (cities) => {
  console.log('cities: ', cities);
};
emitter.on('print cities', cb2);

emitter.emit('new city', 'Rome');
emitter.emit('new city', 'Moscow');
emitter.emit('print cities', cities);
