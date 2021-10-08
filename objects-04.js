/*

removeNumbersLargerThan
Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

/*/

// var obj = {
//   a: 8,
//   b: 2,
//   c: "montana",
// };

// console.log(obj.c.length);

removeNumbersLargerThan = (num, obj) => {
  for (const prop in obj) {
    if (obj[prop] > num) {
      delete obj[prop];
    }
  }
  return obj;
};

// console.log(removeNumbersLargerThan(5, obj));

/*
Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
/*/

removeNumbersLessThan = (num, obj) => {
  for (const prop in obj) {
    if (obj[prop] < num) {
      delete obj[prop];
    }
  }
  return obj;
};

/*
removeStringValuesLongerThan
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
*/

var obj = {
  name: "Montana",
  age: 20,
  location: "Texas",
};

removeStringValuesLongerThan = (num, obj) => {
  for (const key in obj) {
    if (typeof (obj[key] === "string") && obj[key].length > num) {
      delete obj[key];
    }
  }
  return obj;
};
console.log(removeStringValuesLongerThan(6, obj));
