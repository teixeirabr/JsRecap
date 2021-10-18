/*

getElementsGreaterThan10AtProperty
Write a function called "getElementsGreaterThan10AtProperty".

Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements greater than 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30] /*/

// var obj = {
//   key: [1, 20, 30],
// };

function getElementsGreaterThan10AtProperty(obj, key) {
  if (obj[key] === 0) {
    return [];
  }

  if (obj[key] === undefined) {
    return [];
  }

  if (obj[key] === false) {
    return [];
  }

  let greater = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] > 10) {
      greater.push(obj[key][i]);
    }
  }
  return greater;
}

// var output = getElementsGreaterThan10AtProperty(obj, "key");
// console.log(output);

/*
getFirstElementOfProperty
Write a function called "getFirstElementOfProperty".

Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
*/

getFirstElementOfProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return undefined;
  }

  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }

  if (obj[key].length === 0) {
    return undefined;
  }

  return obj[key][0];
};

/*

getNthElementOfProperty
Write a function called "getNthElementOfProperty".

Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
If n is out of range, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

*/

function getNthElementOfProperty(obj, key, n) {
  if (obj[key] === undefined) {
    return undefined;
  }

  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }

  return obj[key][n];
}

// var obj = {
//   key: [1, 2, 6],
// };
// var output = getNthElementOfProperty(obj, "key", 1);
// console.log(output);

// /*

/*
getLastElementOfProperty
Submitted on Today at 1:54 PM
Write a function called "getLastElementOfProperty".

Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
if the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
//var obj = {key: [1, 2, 5]
//};
//var output = getLastElementOfProperty(obj, 'key');
//console.log(output); // --> 5

/*/

getLastElementOfProperty = (obj, key) => {
  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }

  if (obj[key] === undefined) {
    return undefined;
  }

  return obj[key].pop();
};

var obj = {
  key: [1, 2, 5],
};
var output = getLastElementOfProperty(obj, "key");
console.log(output); // --> 5
