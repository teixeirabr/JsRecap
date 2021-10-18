/*

getSmallestElementAtProperty
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

/*/

getSmallestElementAtProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return undefined;
  }

  if (obj[key].length === 0) {
    return undefined;
  }

  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }

  let smallest = obj[key][0];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] < smallest) {
      smallest = obj[key][i];
    }
  }
  return smallest;
};

// var obj = {
//   key: [2, 1, 5],
// };
// var output = getSmallestElementAtProperty(obj, "key");
// console.log(output); // --> 1

/*
getLargestElementAtProperty
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
*/

getLargestElementAtProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return undefined;
  }

  if (obj[key].length === 0) {
    return undefined;
  }

  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }

  let array = obj[key];

  console.log(array);

  return Math.max(...array);
};

// var obj = {
//   key: [1, 2, 4],
// };
// var output = getLargestElementAtProperty(obj, "key");
// console.log(output); // --> 4

/*

getAllButLastElementOfProperty
Write a function called "getAllButLastElementOfProperty".

Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the property at the given key is not an array, it return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
*/

getAllButLastElementOfProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return [];
  }

  if (obj[key].length === 0) {
    return [];
  }

  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  obj[key].pop();

  return obj[key];
};

// var obj = {
//   key: [1, 2, 3],
// };
// var output = getAllButLastElementOfProperty(obj, "key");
// console.log(output); // --> [1,2]

/*
getElementOfArrayProperty
Write a function called "getElementOfArrayProperty".

Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

Notes:

If the array is empty, it should return undefined.
If the given index is out of range of the array located at the given key, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'

*/

function getElementOfArrayProperty(obj, key, index) {
  if (obj[key] === undefined) {
    return undefined;
  }

  if (obj[key].length === 0) {
    return undefined;
  }

  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }

  let result = "";

  for (let i = 0; i < obj[key].length; i++) {
    result = obj[key][index];
  }
  return result;
}

var obj = {
  key: ["Jamil", "Albrey"],
};
var output = getElementOfArrayProperty(obj, "key", 0);
console.log(output); // --> 'Jamil'
