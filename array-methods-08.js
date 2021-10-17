/*

Write a function called "removeElement".

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

Notes:

If all the elements match, it should return an empty array.
If an empty array is passed in, it should return an empty array.
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

*/

removeElement = (array, discarder) => {
  let removed = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== discarder) {
      removed.push(array[i]);
    }
  }
  return removed;
};

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

/*

keep
Write a function called "keep".

Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

Notes:

If no elements match, "keep" should return an empty array.
var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); --> [2, 2]

/*/

keep = (array, keeper) => {
  let keep = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === keeper) {
      keep.push(array[i]);
    }
  }
  return keep;
};

var output = keep([1, 2, 3, 2, 1], 2);
console.log(output);

/*

computeAverageOfNumbers
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.

Notes:

If given an empty array, it should return 0.
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

/*/

computeAverageOfNumbers = (nums) => {
  let average = nums.reduce((a, b, l) => a + b / nums.length, 0);
  return average;
};

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
