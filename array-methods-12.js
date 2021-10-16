/*
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
/*/

findSmallestElement = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let smallest = arr[0];
  //   console.log("arr[0]", arr[0]);

  for (let i = 0; i < arr.length; i++) {
    // console.log(
    //   "i",
    //   i,
    //   "array index",
    //   arr[i],
    //   "is smaller than",
    //   smallest,
    //   "true or false?"
    // );
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

// console.log(findSmallestElement([3, 4, 1, 5, 0.5]));

/*

findShortestElement
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string.
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

*/

findShortestElement = (arr) => {
  if (arr.length === 0) {
    return "";
  }

  let shortest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // console.log(
    //   "is",
    //   arr[i],
    //   "length",
    //   arr[i].length,
    //   "shorter than=",
    //   shortest.length
    // );
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest;
};

console.log(findShortestElement(["two", "three", "a"]));
