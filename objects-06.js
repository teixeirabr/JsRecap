/*

removeArrayValues
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 } 

*/

// var obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ["hi", "there"],
// };

removeArrayValues = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      delete obj[key];
    }
  }
  return obj;
};

// console.log(removeArrayValues(obj));

/*
removeNumberValues
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose values are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

*/

var obj = {
  a: 2,
  b: "remaining",
  c: 4,
};

removeNumberValues = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      delete obj[key];
    }
  }
  return obj;
};

// console.log(removeNumberValues(obj));

/*
removeStringValues
Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
*/

var obj = {
  name: "Sam",
  age: 20,
};

// console.log(Object.values(obj));

removeStringValues = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
  return obj;
};

console.log(removeStringValues(obj));
