/*

1. getFullName
Write a function called "getFullName". Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

*/

getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(getFullName("John", "Smith"));

/*

2.getLengthOfWord
Write a function called "getLengthOfWord". Given a word, "getLengthOfWord" returns the length of the given word.

var output = getLengthOfWord('some');
console.log(output); // --> 4

*/

getLengthofWord = (word) => {
  return word.length;
};

console.log(getLengthofWord("same"));

/*/

3.getLengthOfTwoWords
Write a function called "getLengthOfTwoWords". Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9

*/

getLengthofTwoWords = (word1, word2) => {
  return word1.length + word2.length;
};

console.log(getLengthofTwoWords("some", "words"));
