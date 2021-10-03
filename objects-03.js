/*

isPersonOldEnoughToDrive
Write a function called "isPersonOldEnoughToDrive".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.

Notes:

The legal driving age in the United States is 16.
var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true

/*/
isPersonOldEnoughToDrive = (person) => {
  if (person.age >= 16) {
    return true;
  } else return false;
};

/*

isPersonOldEnoughToVote
Write a function called "isPersonOldEnoughToVote".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.

Notes:

The legal voting age in the United States is 18.
var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true

*/

isPersonOldEnoughToVote = (person) => {
  if (person.age >= 18) {
    return true;
  } else return false;
};

/*

addArrayProperty
Write a function called "addArrayProperty".

Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]

*/

addArrayProperty = (obj, key, arr) => {
  return (obj[key] = arr);
};

var myObj = {};
var myArray = [1, 3];

console.log(addArrayProperty(myObj, "myProperty", myArray));
