/*

getAllElementsButFirst
Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

*/

getAllElementsButFirst = (array) => {
  array.shift();
  return array;
};

console.log(getAllElementsButFirst([1, 2, 3, 4]));

/*

getAllElementsButLast
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

/*/

getAllElementsButLast = (array) => {
  array.pop();
  return array;
};

/*

removeFromFront
Write a function called "removeFromFront".

Given an array, "removeFromFront" returns the given array with its first element removed.

Notes:

You should be familiar with the method 'shift'.

*/

removeFromFront = (arr) => {
  arr.shift();
  return arr;
};
