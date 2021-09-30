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

/*
3.Write a function called "isOldEnoughToVote". Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States. Notes:

The legal voting age in the United States is 18.
var output = isOldEnoughToVote(22);
console.log(output); // --> true
*/

isOldEnoughToVote = (age) => {
  if (age >= 18) {
    return true;
  } else return false;
};

console.log("can vote", isOldEnoughToVote(19));

/*

isOldEnoughToDrinkAndDrive
Write a function called "isOldEnoughToDrinkAndDrive". Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States. Notes:

The legal drinking age in the United States is 21.
It is always illegal to drink and drive in the United States.
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

*/

isOldEnoughToDrinkAndDrive = (age) => {
  return false;
};

console.log("drinkAndDrive", isOldEnoughToDrinkAndDrive(22));
