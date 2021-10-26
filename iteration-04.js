/*
computeFactorialOfN
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24

/*/

function computeFactorialOfN(n) {
  if (n === 0 || n === 1) return 1;
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

/*

Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

*/

repeatString = (string, num) => {
  let repeated = "";
  for (let i = 0; i < num; i++) {
    repeated += string;
  }
  return repeated;
};

var output = repeatString("code", 3);
console.log(output); // --> 'codecodecode'
