/*

getSumOfAllElementsAtProperty
Write a function called "getSumOfAllElementsAtProperty".

Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

Notes:

If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the key, it should return 0.
var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

/*/

var obj = {
  key: [4, 1, 8],
};

getSumOfAllElementsAtProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return 0;
  }

  if (Array.isArray(obj[key]) === false) {
    return 0;
  }

  if (obj[key].length === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < obj[key].length; i++) {
    console.log(obj[key][i]);
    result += obj[key][i];
  }
  return result;
};

var output = getSumOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 13
