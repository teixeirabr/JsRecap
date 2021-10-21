/*

multiply
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:

It should not use the multiply operator - *
var output = multiply(4, 7);
console.log(output); // --> 28

*/

multiply = (num1, num2) => {
  let result = 0;
  for (let i = 0; i < num2; i++) {
    result += num1;
  }
};

var output = multiply(4, 7);
console.log(output); // --> 28
