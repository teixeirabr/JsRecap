/*

getStringLength
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:

Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.
var output = getStringLength('hello');
console.log(output); // --> 5

*/

function getStringLength(string) {
  let count = 0;

  while (string !== "") {
    string = string.slice(1);
    count++;
  }

  return count;
}

var output = getStringLength("hello");
console.log(output); // --> 5
