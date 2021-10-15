/*
Write a function called "filterEvenElements".

Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.
*/

filterEvenElements = (arr) => {
  return arr.filter((e) => e % 2 === 0);
};

/*

getLengthOfShortestElement
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:

It should return 0 if the array is empty.
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

/*/

getLengthOfShortestElement = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let getShortest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < getShortest.length) {
      getShortest = arr[i];
    }
  }
  return getShortest.length;
};

console.log(getLengthOfShortestElement(["one", "two", "three"]));

/*

Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:

If there are ties, it returns the first element to appear.
If the array is empty, it should return an empty string.
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'


/*/

getLongestElement = (arr) => {
  if (arr.length === 0) {
    return "";
  }

  let longestElement = arr[0];
  //   console.log(longestElement.length);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }
  return longestElement;
};

// console.log(getLongestElement(["one", "two", "three"]));
