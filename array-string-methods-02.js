/*

convertDoubleSpaceToSingle
Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
Notes:

In order to do this problem, you should be familiar with "String.split", and "Array.join".

*/

let doubleSpaces = "string  with  double  spaces";

convertDoubleSpaceToSingle = (str) => {
  let arrayString = str.split("");
  console.log("first console", arrayString);
  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i] === " " && arrayString[i + 1] === " ") {
      delete arrayString[i];
    }
  }
  return arrayString.join("");
};

console.log("hi", convertDoubleSpaceToSingle(doubleSpaces));
