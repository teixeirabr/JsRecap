/*

average
Write a function called "average".

Given two numbers, "average" returns their average.

var output = average(4, 6);
console.log(output); // --> 5

/*/

average = (num1, num2) => {
  let sum = num1 + num2;
  return sum / 2;
};

console.log(average(4, 6));

/*

computeAreaOfATriangle
Write a function called "computeAreaOfATriangle".

Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12

/*/

computeAreaOfATriangle = (base, height) => {
  return math * height * 0.5;
};

console.log(computeAreaOfATriangle(4, 6));

/*

3
cube
Write a function called "cube".

Given a number, "cube" returns the cube of that number.

var output = cube(3);
console.log(output); // --> 27

*/

cube = (num) => {
  return num ** 3;
};

console.log(cube(3));

/*

square
Write a function called "square".

Given a number, "square" should return the square of the given number.

var output = square(5);
console.log(output); // --> 25

*/

square = (num) => {
  return num ** 2;
};

console.log("square", square(2));
