/*

convertScoreToGrade
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

/*/

function convertScoreToGrade(score) {
  if (score <= 100 && score >= 90) {
    return "A";
  } else if (score <= 89 && score >= 80) {
    return "B";
  } else if (score <= 79 && score >= 70) {
    return "C";
  } else if (score <= 69 && score >= 60) {
    return "D";
  } else if (score <= 59 && score >= 0) {
    return "F";
  } else return "INVALID SCORE";
}

//     var output = convertScoreToGrade(80);
// console.log(output); // --> 'A'

//
/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
There are is no F+ and there is no F-.
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
/*/

function convertScoreToGradeWithPlusAndMinus(score) {
  // A+/-

  if (score <= 100 && score >= 98) {
    return "A+";
  }
  if (score <= 97 && score >= 93) {
    return "A";
  }
  if (score <= 92 && score >= 90) {
    return "A-";
  }

  // B+/-
  else if (score <= 89 && score >= 88) {
    return "B+";
  } else if (score <= 87 && score >= 83) {
    return "B";
  } else if (score <= 82 && score >= 80) {
    return "B-";
  }

  // C+/-
  else if (score <= 79 && score >= 78) {
    return "C+";
  } else if (score <= 77 && score >= 73) {
    return "C";
  } else if (score <= 72 && score >= 70) {
    return "C-";
  }

  // D+/-
  else if (score <= 69 && score >= 68) {
    return "D+";
  } else if (score <= 67 && score >= 63) {
    return "D";
  } else if (score <= 62 && score >= 60) {
    return "D-";
  }
  //F+/-
  else if (score <= 59 && score >= 0) {
    return "F";
  } else return "INVALID SCORE";
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-
