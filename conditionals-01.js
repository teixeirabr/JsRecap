/*
1. isOldEnoughToDrink

Write a function called "isOldEnoughToDrink". Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States. Notes:

The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true


*/

isOldEnoughToDrink = (age) => {
  if (age >= 21) {
    return true;
  } else return false;
};

console.log(isOldEnoughToDrink(21));

/*
2. isOldEnoughToDrive .

Write a function called "isOldEnoughToDrive". Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States. Notes:

The legal driving age in the United States is 16.
var output = isOldEnoughToDrive(22);
console.log(output); // --> true

*/

isOldEnoughToDrive = (age) => {
  if (age >= 16) {
    return true;
  } else return false;
};

console.log(isOldEnoughToDrive(16));
