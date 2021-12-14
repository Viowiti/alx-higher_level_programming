#!/usr/bin/node

const myList = require('100-data.js').list;

const byIndex = () => {
  return myList.map((item) => item * myList.indexOf(item));
};
console.log(myList);
console.log(byIndex());
