'use strict';

const phonebook = { a: 'a', b: 'b' };

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
