/*isOdd
Write a function called "isOdd". Given a number, "isOdd" returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true

*/

isOdd = (num) => {
  if (num !== 0) {
    return true;
  } else return false;
};

/*

isSameLength
Write a function called "isSameLength".

Given two words, "isSameLength" returns whether the given words have the same length.

var output = isSameLength('words', 'super');
console.log(output); // --> true

/*/

isSameLength = (word1, word2) => {
  if (word1.length === word2.length) {
    return true;
  } else return false;
};

console.log(isSameLength("abc", "cdef"));

/*
Write a function called "areBothOdd".

Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

var output = areBothOdd(1, 3);
console.log(output); // --> true

*/

areBothOdd = (num1, num2) => {
  if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return true;
  } else return false;
};

/*

Write a function called "isEitherEven".

Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

var output = isEitherEven(1, 4);
console.log(output); // --> true

*/

isEitherEven = (num1, num2) => {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else return false;
};

console.log("eitherEven", isEitherEven(1, 4));
