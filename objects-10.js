/*

getSquaredElementsAtProperty
Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.

*/

// var obj = {
//   key: [2, 1, 5],
// };

getSquaredElementsAtProperty = (obj, key) => {
  //If the array is empty, it should return an empty array.
  if (obj[key].length === 0) {
    return [];
  }
  //If the property at the given key is not an array, it should return an empty array.

  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  //If there is no property at the key, it should return an empty array.

  if (obj[key] === undefined) {
    return [];
  }

  //returns an array containing all the squared elements of the array located at the given key.

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    result.push(obj[key][i] ** 2);
  }
  return result;
};

// var output = getSquaredElementsAtProperty(obj, "key");
// console.log(output); // --> [4, 1, 25]

/*
Write a function called "getOddElementsAtProperty".

Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no odd elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

*/

var obj = {
  key: [1, 2, 3, 4, 5],
};

getOddElementsAtProperty = (obj, key) => {
  //If there is no property at the key, it should return an empty array.

  if (obj[key] === undefined) {
    return [];
  }
  //If the array is empty, it should return an empty array.
  if (obj[key].length === 0) {
    return [];
  }
  //If the property at the given key is not an array, it should return an empty array.

  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  return obj[key].filter((e) => e % 2 == 1);
};

var output = getOddElementsAtProperty(obj, "key");
console.log(output); // --> [1, 3, 5]

/*

getEvenElementsAtProperty
Submitted on Today at 10:39 PM
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the array contains no even elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

/*/

getEvenElementsAtProperty = (obj, key) => {
  //If there is no property at the key, it should return an empty array.

  if (obj[key] === undefined) {
    return [];
  }
  //If the array is empty, it should return an empty array.
  if (obj[key].length === 0) {
    return [];
  }
  //If the property at the given key is not an array, it should return an empty array.

  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  return obj[key].filter((e) => e % 2 == 0);
};
