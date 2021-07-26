'use strict';

const crypto = require('crypto');

const getKey = (x) => x.toString() + ':' + typeof x;

const generateKey = (arr) => {
  const key = arr.map(getKey).join('|');
  return crypto.createHash('sha256').update(key).digest('hex');
};

const asyncKillTimeoutMemo = (callbackDelayKill, fn) => {
  let flagKill = false;
  const timer = setTimeout(() => {
    flagKill = true;
    timer.close();
  }, callbackDelayKill);
  return (...args) => {
    const callback = args.pop();
    const txt = 'callback must be a function';
    if (typeof callback !== 'function') throw new Error(txt);
    fn(...args, (err, data) => {
      if (!flagKill) callback(err, data);
    });
  };
};

const fn = (...args) => {
  const callback = args.pop();

  const txtError = 'callback must be a function';
  if (typeof callback !== 'function') throw new Error(txtError);
  const txtErrorCb = `${args[0]} must be a number`;

  if (typeof args[0] !== 'number') return callback(txtErrorCb);
  callback(null, args);
};

const callback = (...args) => {
  const err = args.shift();
  console.dir(args);
  if (err) throw Error(err);
};

const wfn200 = asyncKillTimeout(200, fn);
const wfn500 = asyncKillTimeout(500, fn);

setTimeout(() => {
  wfn200(200, callback);
  wfn200('200', callback);
  wfn500(500, callback);
  wfn500('500', callback);
}, 300);

