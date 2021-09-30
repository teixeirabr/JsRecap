/*
1.checkAge

Write a function called "checkAge". Given a person's name and age, "checkAge" returns one of two messages: "Go home, {insert_name_here}!", if they are younger than 21. "Welcome, {insert_name_here}!", if they are 21 or older. Naturally, replace "{insert_name_here}" with the given name. :)

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'

*/

checkAge = (name, age) => {
  if (age < 21) {
    return `Go home, ${name}!`;
  } else {
    return `Welcome, ${name}!`;
  }
};

console.log(checkAge("Adrian", 22));

/*

2.isGreaterThanTen
Write a function called "isGreaterThan10". Given a number, "isGreaterThan10" returns whether the given number is greater than 10.

var output = isGreaterThan10(11);
console.log(output); // --> true

/*/

isGreaterThan10 = (num) => {
  if (num > 10) {
    return true;
  } else return false;
};
console.log(isGreaterThan10(09));

/* 3.isLessThan30
Write a function called "isLessThan30". Given a number, "isLessThan30" returns whether the given number is less than 30.

var output = isLessThan30(9);
console.log(output); // --> true
*/

isLessThan30 = (num) => {
  if (num < 30) {
    return true;
  } else return false;
};

console.log(isLessThan30(9));

/*
4. equalsTen
Write a function called "equalsTen". Given a number, "equalsTen" returns whether or not the given number is 10.

var output = equalsTen(9);
console.log(output); // --> false
/*/

equalsTen = (num) => {
  if (num === 10) {
    return true;
  } else return false;
};
