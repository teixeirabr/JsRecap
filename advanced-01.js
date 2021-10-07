/*

countWords
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:

If given an empty string, it should return an empty object.
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

/*/

countWords = (str) => {
  if (str === "") {
    return {};
  }
  let result = {};
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (result[words[i]] === undefined) {
      result[words[i]] = 1;
    } else {
      result[words[i]] += 1;
    }
  }
  return result;
};

console.log(countWords("ask a bunch get a bunch"));
