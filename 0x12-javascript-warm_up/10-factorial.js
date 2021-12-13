#!/usr/bin/node
const argArr = process.argv;
const argOne = argArr[2];
const toInt = parseInt(argOne);

const factorial = (n) => {
  if(n == 0 || n == 1 || n == NaN){
    return 1;
} else {
    return n * factorial(n-1);
}
}
console.log(factorial(toInt));
