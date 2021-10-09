/*
removeEvenValues
Write a function called "removeEvenValues".

Given an object, "removeEvenValues" removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.

Example:

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

*/

var obj = {
  a: 2,
  b: 3,
  c: 4,
};

removeEvenValues = (obj) => {
  for (const key in obj) {
    if (obj[key] % 2 == 0) {
      delete obj[key];
    }
  }
  return obj;
};
// console.log(removeEvenValues(obj));

/*

countNumberOfKeys
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3

*/

var obj = {
  a: 1,
  b: 2,
  c: 3,
};

countNumberOfKeys = (obj) => {
  let count = 0;
  for (const key in obj) {
    count = obj[key]++;
  }
  return count;
};

console.log(countNumberOfKeys(obj));
