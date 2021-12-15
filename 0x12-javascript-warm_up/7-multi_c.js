#!/usr/bin/node

const myArr = process.argv;
const firstArg = myArr[2];
const converted = parseInt(firstArg);

if (Number.isNaN(converted)) {
  console.log('Missing number of occurrences');
} else if (converted < 1) {

} else {
  let x = 0;
  while (x < converted) {
    console.log('C is fun');
    x++;
  }
}
