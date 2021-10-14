/*
Write a function called "filterOddLengthWords".

Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/

filterOddLengthWords = (words) => {
  let array = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      array.push(words[i]);
    }
  }
  return array;
};

/*

filterEvenLengthWords
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

/*/

filterEvenLengthWords = (words) => {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 == 0) {
      result.push(words[i]);
    }
  }
  return result;
};

console.log(filterEvenLengthWords(["word", "words", "word", "words"]));

/*

GetLengthOfLongestElement

Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:

It should return 0 if the array is empty.
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

/*/

getLengthOfLongestElement = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let longestElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }
  return longestElement.length;
};

console.log(getLengthOfLongestElement(["one", "two", "three"]));
