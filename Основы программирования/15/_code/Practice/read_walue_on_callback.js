'use strict';

const readValue = (value, callback = (err, value) => {
}) => {
  // getting data
  const getData = (a) => a;
  const data = getData(value);
  // handled error
  if (data === undefined) callback('error loading');
  // handled data
  else callback(null, data);
};

const callback = (err, data) => {
  // threat error
  if (err) console.error(err);
  // threat data
  else console.log(data);
};

debugger
readValue(undefined, callback);
readValue('content', callback);

