/*

computeTripledAreaOfARectangle
Write a function called "computeTripledAreaOfARectangle".

Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24

*/

computeTripledAreaOfARectangle = (length, width) => {
  return 3 * (length * width);
};

/*

Write a function called "computePerimeterOfACircle".

Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

Notes:

Math.PI can be used for pi.
var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345

/*/

computePerimeterOfACircle = (radius) => {
  return 2 * Math.PI * radius;
};

/*

computeAreaOfACircle
Write a function called "computeAreaOfACircle".

Given the radius of a circle, "computeAreaOfACircle" returns its area.

Notes:

Math.PI can be used for pi.
var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669

*/

computeAreaOfACircle = (radius) => {
  return Math.PI * radius ** 2;
};
