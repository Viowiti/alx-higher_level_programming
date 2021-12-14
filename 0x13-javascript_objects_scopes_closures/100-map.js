#!/usr/bin/node

const myList = require('100-data.js').list;
const newList = myList.map((item) => item * myList.indexOf(item));
console.log(myList);
console.log(newList);
