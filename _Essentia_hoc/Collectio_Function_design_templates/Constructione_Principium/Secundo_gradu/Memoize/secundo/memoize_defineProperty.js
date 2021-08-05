'use strict';

const crypto = require('crypto');

const getKey = (x) => x.toString() + ':' + typeof x;

const generateKey = (arr) => {
  const key = arr.map(getKey).join('|');
  return crypto.createHash('sha256').update(key).digest('hex');
};

const Memoized = function() {
};

// const objProto = {};

const objProto = {
  clear() {
    this.cache.clear();
  },
  add(key, err, data) {
    this.emit('add', err, data);
    this.cache.set(key, { err, data });
    return this;
  },
  del(key) {
    this.emit('del', key);
    this.cache.delete(key);
    return this;
  },
  get(key, callback) {
    const record = this.cache.get(key);
    callback(record.err, record.data);
    return this;
  },
  on(eventName, listener) {
    if (eventName in this.events) {
      this.events[eventName] = listener;
    }
  },
  emit(eventName, ...args) {
    const event = this.events[eventName];
    if (event) event(...args);
  }
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

  Object.defineProperties(memoized, {
    'setProperties': {
      value: function(name, props) {
        props[name] = props;
        return this;
      },
    },
    'addEventName': {
      value: function(name = '') {
        props.events[name] = null;
        return this;
      },
    },
    'addPrototypes': {
      value: function(objProto) {
        for (const key in objProto) {
          if (objProto.hasOwnProperty(key)) Memoized.prototype[key] = objProto[key];
        }
        return this;
      },
    },
  });

  Object.setPrototypeOf(memoized, Memoized.prototype);
  Object.assign(memoized, props);

  return memoized;
};

// Usu
const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;
debugger
const mfn = memoizeAsync(fn).addPrototypes(objProto);

mfn.on('add', (...data) => {
  console.log('event add called with: ', data);
});
// mfn.addPrototypes(objProto);

mfn(1, callback);
debugger
mfn.clear();
mfn(1, callback);
mfn(1, callback);
debugger
mfn(2, callback);
debugger
