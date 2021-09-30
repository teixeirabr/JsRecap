/*
1.Write a function called "getProperty". Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:

If there is no property at the given key, it should return undefined.
var obj = {
     key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'

*/

getProperty = (obj, key) => {
  return obj[key];
};

let user = {
  name: "John",
  age: 30,
};

console.log(getProperty(user, "name"));

/*

2.Write a function called "addProperty". Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true

*/

addProperty = (obj, key) => {
  return (obj[key] = true);
};

console.log(addProperty(user, "honest"));

console.log(user);

/*

Write a function called "removeProperty". Given an object and a key, "removeProperty" removes the given key from the given object.

/*/

removeProperty = (obj, key) => {
  return delete obj[key];
};

console.log(removeProperty(user, "honest"));

console.log(user);
