/*

getLargestElement
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:

It should return 0 if the array is empty.
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

*/

getLargestElement = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(getLargestElement([5, 2, 8, 3]));

/*

computeSumOfAllElements

Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6

/*/

computeSumOfAllElements = (arr) => {
  let sumOf = arr.reduce((acc, val) => acc + val, 0);
  return sumOf;
};
var output = computeSumOfAllElements([1, 2, 3]);
console.log(output);
