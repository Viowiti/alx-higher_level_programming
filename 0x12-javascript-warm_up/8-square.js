#!/usr/bin/node

const myArr = process.argv;
const firstArg = myArr[2];
const converted = parseInt(firstArg);

if (Number.isNaN(converted)) {
  console.log('Missing size');
} else {
  let string = '';
  for (let i = 0; i < converted; i++) { // external loop
    for (let j = 0; j < converted; j++) { // internal loop
      string += '*';
    }
    // newline after each row
    string += '\n';
  }
  // printing the string
  console.log(string);
}
