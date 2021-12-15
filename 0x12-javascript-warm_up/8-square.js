#!/usr/bin/node

const myArr = process.argv;
const firstArg = myArr[2];
const converted = parseInt(firstArg);

if (Number.isNaN(converted)) {
  console.log('Missing size');
} else {
    for (let i = 0; i < converted; i++) {
        for (let z = 0; z < converted; z++){
            console.log('X');
        }
        console.log('');
    }
}