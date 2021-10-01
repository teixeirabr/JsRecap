/*

isLessThan
Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true
J

*/

isLessThan = (num1, num2) => {
  if (num2 < num1) {
    return true;
  } else return false;
};

/*

isGreaterThan
Write a function called "isGreaterThan". Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

var output = isGreaterThan(11, 10);
console.log(output); // --> false

/*/

isGreaterThan = (num1, num2) => {
  if (num2 > num1) {
    return true;
  } else return false;
};

/*
Write a function called "isEqualTo". Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

var output = isEqualTo(11, 10);
console.log(output); // --> false
JAVASCRIPT

*/

isEqualTo = (num1, num2) => {
  if (num2 === num1) {
    return true;
  } else return false;
};

/*

Write a function called "isEven". Given a number, "isEven" returns whether it is even.

var output = isEven(11);
console.log(output); // --> false

*/

isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else return false;
};

console.log("even =>>", isEven(10));
