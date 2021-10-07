/*
Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:

Do not use the || operator.
Use ! and && operators instead.
var output = or(true, false);
console.log(output); // --> true;

*/

or = (expression1, expression2) => {
  if (!expression1 && expression2 === true) {
    expression1 = true;
  }
  return expression1;
};

/*
isEitherEvenOrAreBoth7
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true
/*/

isEitherEvenOrAreBoth7 = (num1, num2) => {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else if (num1 === 7 && num2 === 7) {
    return true;
  } else return false;
};

/*
Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false

*/

isEitherEvenAndLessThan9 = (num1, num2) => {
  if ((num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9) {
    return true;
  } else return false;
};

console.log(isEitherEvenAndLessThan9(2, 4));
