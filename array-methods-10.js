/*

Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

/*/

squareElements = (array) => {
  let square = [];
  for (let i = 0; i < array.length; i++) {
    square.push(array[i] ** 2);
  }
  return square;
};

console.log(squareElements([1, 2, 3]));
