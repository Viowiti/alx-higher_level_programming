#!/usr/bin/node
//  Storing the arguments array in a variable.
const argsArray = process.argv;

if (argsArray.length < 3) {
  console.log('No argument');
} else if (argsArray.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
