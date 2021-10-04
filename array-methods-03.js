/*

Write a function called "joinArrays".

Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2".

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
You should be familiar with the "concat" method for this problem.

/*/

function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(joinArrays([1, 2], [3, 4]));

/*

Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

Notes:

In order to do this you should be familiar with the 'slice' method.
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']

*/

getElementsAfter = (array, n) => {
  return array.slice(n + 1);
};

console.log(getElementsAfter(["a", "b", "c", "d", "e"], 2));

/*

Write a function called "getElementsUpTo".

Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

Notes:

In order to do this you should be familiar with the 'slice' method.
var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']

*/

getElementsUpTo = (array, n) => {
  return array.slice(0, n);
};

console.log("up to", getElementsUpTo(["a", "b", "c", "d", "e"], 3));
