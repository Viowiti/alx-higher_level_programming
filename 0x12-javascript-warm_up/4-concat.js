#!/usr/bin/node

const myArr = process.argv;

if (myArr.length > 3) {
  console.log(`${myArr[2]} is ${myArr[3]}`);
} else if (myArr.length === 3) {
  console.log(`${myArr[2]} is ${typeof myArr[3]}`);
} else if (myArr.length < 3) {
  console.log(`${myArr[2]} is ${typeof myArr[3]}`);
}
