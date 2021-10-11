/*

getLongestOfThreeWords
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:

If there is a tie, it should return the first word in the tie.
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

*/

getLongestOfThreeWords = (word1, word2, word3) => {
  let words = [word1, word2, word3];
  let longestWord = words[0];
  for (i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(getLongestOfThreeWords("these", "three", "words"));

/*
findShortestOfThreeWords
Submitted on Today at 6:04 PM
Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

Notes:

If there are ties, it should return the first word in the parameters list.
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

*/

function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  let words = [word1, word2, word3];
  let shortestWord = words[0];
  for (i = 0; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
}
