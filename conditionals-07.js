/*
areValidCredentials
Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true

*/

areValidCredentials = (name, password) => {
  if (name.length > 3 && password.toString().length >= 8) {
    return true;
  } else return false;
};

// console.log(areValidCredentials("andre", 12345678));

/*

findMinLengthOfThreeWords
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

*/

findMinLengthOfThreeWords = (word1, word2, word3) => {
  let check = [word1.length, word2.lenth, word3.length];
  check.sort();
  const min = check[0];

  return min;
};

// console.log(findMinLengthOfThreeWords("a", "be", "see"));

/*

indMaxLengthOfThreeWords
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

*/

findMaxLengthOfThreeWords = (word1, word2, word3) => {
  let check = [word1.length, word2.length, word3.length];
  console.log("array length", check.length);
  check.sort();
  return check[check.length - 1];
};

console.log(findMaxLengthOfThreeWords("a", "be", "see"));
