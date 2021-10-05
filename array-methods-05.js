/*

removeFromBackOfNew
Write a function called "removeFromBackOfNew".

Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

Notes:

You should be familiar with the 'slice' method.
var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]

*/

removeFromBackOfNew = (arr) => {
  let copyOfArray = arr.slice();
  copyOfArray.pop();
  return copyOfArray;
};

console.log(removeFromBackOfNew([1, 2, 3]));

/*

removeFromFrontOfNew
Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

Notes:

You should be familiar with the 'slice' method.
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

/*/

removeFromFrontOfNew = (arr) => {
  let copyOfArray = arr.slice();
  copyOfArray.shift();
  return copyOfArray;
};

console.log(removeFromFrontOfNew([1, 2, 3]));

/*

countCharacter
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

/*/

countCharacter = (str, char) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};

console.log("count", countCharacter("I am a hacker", "a"));
