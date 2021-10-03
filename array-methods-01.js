/*

getNthElement
Write a function called "getNthElement".

Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.

Notes:

If the array has a length of 0, it should return 'undefined'.
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

/*/

getNthElement = (array, n) => {
  return array[n];
};

let arr1 = [1, 3, 5];

// console.log(getNthElement(arr1, 1));

/*

getFirstElement
Write a function called "getFirstElement".

Given an array, "getFirstElement" returns the first element of the given array.

Notes:

If the given array has a length of 0, it should return undefined.
var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

*/

getFirstElement = (array) => {
  return array[0];
};

/*

Write a function called "getLastElement".

Given an array, "getLastElement" returns the last element of the given array.

Notes:

If the given array has a length of 0, it should return 'undefined'.
var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

*/

getLastElement = (array) => {
  let lastIndex = [array.length - 1];
  return array[lastIndex];
};

let last = [1, 2, 3, 4, 5, 6];

console.log(last[2]);

console.log("last element", getLastElement(last));
