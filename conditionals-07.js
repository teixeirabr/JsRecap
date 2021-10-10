/*
areValidCredentials
Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true

*/

areValidCredentials = (name, password) => {
  if (name.length > 3 && password.toString().length >= 8) {
    return true;
  } else return false;
};

console.log(areValidCredentials("andre", 12345678));
