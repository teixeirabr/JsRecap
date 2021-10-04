/*
computeAreaOfARectangle
Write a function called "computeAreaOfARectangle".

Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

*/

computeAreaOfARectangle = (length, width) => {
  return length * width;
};

/*
Write a function called "computePerimeterOfARectangle".

Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimeter.

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
*/

computePerimeterOfARectangle = (length, width) => {
  return 2 * (length + width);
};

/*

computePerimeterOfATriangle
Write a function called "computePerimeterOfATriangle".

Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimeter.

var output = computePerimeterOfATriangle(6, 7, 10);
console.log(output); // --> 23

/*/

computePerimeterOfATriangle = (side1, side2, side3) => {
  return side1 + side2 + side3;
};
