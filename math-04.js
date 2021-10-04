/*

computePower
Write a function called "computePower".

Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.

var output = computePower(2, 3);
console.log(output); // --> 8

/*/

computePower = (num, exponent) => {
  return num ** exponent;
};

/*

Write a function called "computeSquareRoot". Given a number, "computeSquareRoot" returns its square root.

var output = computeSquareRoot(9);
console.log(output); // --> 3

*/

computeSquareRoot = (num) => {
  return Math.sqrt(num);
};

console.log(computeSquareRoot(9));

/*

Write a function called "doubleSquareRootOf". Given a number, "doubleSquareRootOf" returns double its square root.

var output = doubleSquareRootOf(121);
console.log(output); // --> 22

*/

doubleSquareRootOf = (num) => {
  return Math.sqrt(num) * 2;
};

console.log(doubleSquareRootOf(121));
