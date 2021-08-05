'use strict';

const crypto = require('crypto');

const getKey = (x) => x.toString() + ':' + typeof x;

const generateKey = (arr) => {
  const key = arr.map(getKey).join('|');
  return crypto.createHash('sha256').update(key).digest('hex');
};

const Memoized = function() {
};

const memoizeAsync = (fn, length = 2) => {
  const cache = new Map();
  const memoized = (...args) => {
    const callback = args.pop();
    const key = generateKey(args);
    const value = cache.get(key);
    if (cache.has(key)) {
      console.log(`from cache key: ${key}`);
      callback(value.err, value.data);
      return;
    }
    fn(...args, (err, data) => {
      // cache.set(key, { err, data });
      memoized.add(key, err, data);
      memoized.emit('memoize', key, err, data);
      if (cache.size >= length) {
        const firstKey = cache.keys().next().value;
        console.log(`cache deleted key: ${firstKey}`);
        cache.delete(firstKey);
      }
      console.log(`callback called with args: ${err},${data}`);
      callback(err, data);
    });
  };
  const props = {
    cache,
    timeout: 0,
    limit: 0,
    size: 0,
    maxSize: 0,
    maxCount: 0,
    events: {
      timeout: null,
      memoize: null,
      overflow: null,
      add: null,
      del: null,
      clear: null,
    },
  };


  memoized.addPrototype = function(name = '', proto) {
    Memoized.prototype[name] = proto;
  };

  memoized.addPrototypes = function(objProto) {
    for (key of objProto) {
      Memoized.prototype[key] = objProto[key];
    }
  };


  memoized.addEventName = function(name = '') {
    props.events[name] = null;
  };



  Object.setPrototypeOf(memoized, Memoized.prototype);
  return Object.assign(memoized, props);
};

Memoized.prototype.clear = function() {
  this.cache.clear();
};



Memoized.prototype.add = function(key, err, data) {
  this.emit('add', err, data);
  this.cache.set(key, { err, data });
  return this;
};

Memoized.prototype.del = function(key) {
  this.emit('del', key);
  this.cache.delete(key);
  return this;
};

Memoized.prototype.get = function(key, callback) {
  const record = this.cache.get(key);
  callback(record.err, record.data);
  return this;
};

Memoized.prototype.on = function(eventName, listener) {
  if (eventName in this.events) {
    this.events[eventName] = listener;
  }
};

Memoized.prototype.emit = function(eventName, ...args) {
  const event = this.events[eventName];
  if (event) event(...args);
};

// Usu
const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;
const mfn = memoizeAsync(fn);

mfn(1, callback);
debugger
mfn.clear();
mfn(1, callback);
mfn(1, callback);
debugger
mfn(2, callback);
debugger
