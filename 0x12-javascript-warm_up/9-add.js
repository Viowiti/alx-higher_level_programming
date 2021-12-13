#!/usr/bin/node
//  Desctructure the arguments array and store the third and fourth arguments in variables
const [, , firstArg, secondArg] = process.argv;
const firstInt = parseInt(firstArg);
const secondInt = parseInt(secondArg);

//  declare function taking the two variables as arguments and logging the result/
function add (a, b) {
  console.log(a + b);
}
//  call the function add
add(firstInt, secondInt);
