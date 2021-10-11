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
