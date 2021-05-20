'use strict';

const hash = () => {
  debugger
  const data = {};
  let counter = 0;
  return (key, value) => {
    data[key] = value;
    counter++;
    console.dir({ counter });
    return data;
  };
};

const ha = hash();
const ip = ha('name', 'Ipman'); // {name: "Ipman"}
debugger
