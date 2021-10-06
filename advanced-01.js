/*

countWords
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:

If given an empty string, it should return an empty object.
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

/*/

countwords = (str) => {
  if (str === 0) {
    return {};
  }
  let wordCount = str.split(" ");
  for (let i = 0; i < wordCount.length; i++) {
    wordCount[i] += ": " + [i];
  }
  return wordCount;
};

console.log(countwords("ask a bunch get a bunch"));
