#!/usr/bin/node

const myArr = process.argv;
const firstArg = myArr[2];
const converted = parseInt(firstArg);

if (!Number.isNaN(converted)) {
  console.log(`My number : ${converted}`);
} else {
  console.log('Not a number');
}
