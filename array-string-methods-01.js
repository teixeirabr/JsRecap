/*
getAllLetters
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word.

Notes:

If given an empty string, it should return an empty array.
You should be familiar with the 'split' method.
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

/*/

getAllLetters = (str) => {
  if (str === "") {
    return [];
  }
  return str.split("");
};

console.log(getAllLetters("Andre"));

/*

getAllWords
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in the sentence.

Notes:

If given an empty string, it should return an empty array.
You should be familiar with the 'split' method.
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

/*/

getAllWords = (str) => {
  if (str === "") {
    return [];
  }

  return str.split(" ");
};

console.log(getAllWords("the book is on the table"));
