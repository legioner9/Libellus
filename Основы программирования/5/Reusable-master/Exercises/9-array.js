'use strict';

const phonebook = [{
  name: 'Sri',
  phone: 3
}, { name: 'S2', phone: 21 }];

const findPhoneByName = name => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
