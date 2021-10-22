/*

Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
`If it contains no odd length elements, it should return an empty array.
`If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

*/

function getOddLengthWordsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  if (obj[key === undefined]) {
    return [];
  }

  let getOdd = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i].length % 2 == 1) {
      getOdd.push(obj[key][i]);
    }
  }
  return getOdd;
}

/*
getAverageOfElementsAtProperty
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

Notes:

If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
*/

getAverageOfElementsAtProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return 0;
  }
  if (Array.isArray(obj[key]) === false) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  }

  let average = 0;

  for (let i = 0; i < obj[key].length; i++) {
    average += obj[key][i];
  }
  return average / obj[key].length;

  //   let average = obj[key].reduce((a, b) => a + b);

  //   return average / obj[key].length;
};

// var obj = {
//   key: [1, 2, 3],
// };

// var output = getAverageOfElementsAtProperty(obj, "key");
// console.log(output);

//

/*

getEvenLengthWordsAtProperty
Write a function called "getEvenLengthWordsAtProperty".

Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no even length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

*/

getEvenLengthWordsAtProperty = (obj, key) => {
  if (obj[key] === undefined) {
    return [];
  }

  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  let even = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i].length % 2 === 0) {
      even.push(obj[key][i]);
    }
  }
  return even;
};

var obj = {
  key: ["a", "long", "game"],
};
var output = getEvenLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['long', 'game']
