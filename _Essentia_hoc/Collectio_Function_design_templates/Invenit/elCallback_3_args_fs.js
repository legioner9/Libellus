'use strict';

const Fs = require('fs');

const path_ = './elCallback_3_args_fs.js';

const f_str = (path, data) => {
  console.log(`path: ${path}, data: ${data.split('\n').length}`);
};

const cb_3 = (path, err, data) => {
  if (err) throw err;
  f_str(path, data);
};

const cb = cb_3.bind(null, path_);

Fs.readFile(path_, 'utf8', cb);

console.log('end');
