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
  let resultIsPositive = true;
  if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
    resultIsPositive = false;
  }

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let result = 0;
  for (let i = 0; i < num2; i++) {
    result += num1;
  }

  if (resultIsPositive) {
    return result;
  } else {
    return -result;
  }
};

console.log(multiply(4, 7));
