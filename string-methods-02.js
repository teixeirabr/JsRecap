/*computeAverageLengthOfWords
Submitted on Today at 4:10 PM
Write a function called "computeAverageLengthOfWords".

Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

*/

function computeAverageLengthOfWords(word1, word2) {
  let lengthOne = word1.length;
  let lengthTwo = word2.length;

  return (lengthOne + lengthTwo) / 2;
}
