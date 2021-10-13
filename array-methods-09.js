/*
Write a function called "filterOddLengthWords".

Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/

filterOddLengthWords = (words) => {
  let array = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      array.push(words[i]);
    }
  }
  return array;
};

/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
*/

filterEvenLengthWords = (words) => {};
