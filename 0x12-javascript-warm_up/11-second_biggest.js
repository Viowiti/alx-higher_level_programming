#!/usr/bin/node
//  Store the arguments array in a variable
const argsArr = process.argv;

const sorted = argsArr.sort((a, b) => a - b);
sorted.shift();
if (argsArr.length < 3) {
  console.log(0);
} else {
  console.log(sorted[sorted.length - 2]);
}
