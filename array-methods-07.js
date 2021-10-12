/*
Write a function called "joinThreeArrays".

Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
You should be familiar with the "concat" method for this problem.

*/

joinThreeArrays = (arr1, arr2, arr3) => {
  return arr1.concat(arr2, arr3);
};

// console.log(joinThreeArrays([1, 2], [3, 4], [5, 6]));

/*
addToFrontOfNew
Write a function called "addToFrontOfNew".

Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

*/

addToFrontOfNew = (arr, element) => {
  let newArr = [element, ...arr]; //can use unshift
  return newArr;
};

// console.log(addToFrontOfNew([1, 2], 3));

/*

addToBackOfNew
Submitted on Today at 9:40 PM
Write a function called "addToBackOfNew".

Given an array and an element, "addToBackOfNew" returns a clone of the given array, with the given element added to the end.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

/*/

function addToBackOfNew(arr, element) {
  let newArray = [...arr, element]; //can use push
  return newArray;
}

/*

Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

*/

getAllElementsButNth = (array, n) => {
  array.splice(n, 1);
  return array;
};

console.log(getAllElementsButNth(["a", "b", "c"], 1));
