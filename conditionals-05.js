/*

isOddLength
Write a function called "isOddLength".

Given a word, "isOddLength" returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true

*/

isOddLength = (word) => {
  if (word.length % 2 !== 0) {
    return true;
  } else return false;
};

console.log("isOdd", isOddLength("special"));

/*

Write a function called "isEvenLength".

Given a word, "isEvenLength" returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false

*/

isEvenLength = (word) => {
  if (word.length % 2 == 0) {
    return true;
  } else return false;
};

/*

isEvenAndGreaterThan10
Write a function called "isEvenAndGreaterThanTen".

Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false

*/

isEvenAndGreaterThanTen = (num) => {
  if (num % 2 == 0 && num > 10) {
    return true;
  } else return false;
};
