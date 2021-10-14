/*

Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

/*/

squareElements = (array) => {
  let square = [];
  for (let i = 0; i < array.length; i++) {
    square.push(array[i] ** 2);
  }
  return square;
};

// console.log(squareElements([1, 2, 3]));

/*

Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

/*/

filterOddElements = (arr) => {
  let filtered = arr.filter((e) => e % 2 !== 0);
  return filtered;
};

// console.log(filterOddElements([1, 2, 3, 4, 5]));

/*

computeProductOfAllElements
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:

If given array is empty, it should return 0.
var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

*/

computeProductOfAllElements = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let p = 1;

  for (let i = 0; i < arr.length; i++) {
    p *= arr[i];
  }
  return p;
};

console.log(computeProductOfAllElements([2, 5, 6]));
