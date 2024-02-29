const rlSync = require('readline-sync');

// Exercise 1
// Input: string
// Output: string with no duplicate values
// Algo:
// start
// initialize a & b variables to index, compare values in string
// initialize output string / array
// loop over string characters
// if a and b are equal, increment a & b and continue looping
// if a and b are difference, add a to output string
// return output string / array
/*
function crunch(string) {
  let a = 0;
  let output = [];
  for (let a = 0; a < string.length; a += 1) {
    let b = a + 1;
    if (string[a] !== string[b]) {
      output.push(string[a]);
    }
  }
  return output.join('');
}
*/

// Exercise 2
// Input: string
// Output: log string in a box of dashes, lines, pluses
// Algo:
// start
// determine length of string
// initialize

// Exercise 3
// Input: positive integer
// Output: string of numbers 1 & 0, starting with 1
/*
function stringy(num) {
  let output = [];
  for (let i = 0; i < num; i += 1) {
    i % 2 !== 1 ? output.push('1') : output.push('0');
  }
  return output.join('');
}
*/

// Exercise 4 - Obsolete

// Exercise 5
// Input: positive integer
// Output: logs asterisks in shape of right trangle with the hypotenuse on the left side
// function triangle(num) {
//   let output = '';
//   for (let i = 0; i < num; i += 1) {
//     output += '*';
//     console.log(output);
//   }
// }

// Exercise 6
/*
function madlib() {
  let noun = rlSync.question('Enter a noun: ');
  let verb = rlSync.question('Enter a verb: ');
  let adjective = rlSync.question('Enter an adjective: ');
  let adverb = rlSync.question('Enter an adverb: ');

  console.log(
    `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious! \nThe ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\nThe ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`
  );
}
*/

// Exercise 7
/*
function twice(num) {
  let numString = num.toString();
  let splittingIndex = numString.length / 2;
  let leftSide = numString.substring(0, splittingIndex);
  let rightSide = numString.slice(splittingIndex);

  if (leftSide === rightSide) {
    return num;
  } else {
    return num * 2;
  }
}
*/

// Exercise 8
/*
function getGrade(score1, score2, score3) {
  let sum = score1 + score2 + score3;
  let average = sum / 3;
  if (average >= 90) {
    console.log('A');
  } else if (average >= 80) {
    console.log('B');
  } else if (average >= 70) {
    console.log('C');
  } else if (average >= 60) {
    console.log('D');
  } else if (average < 60) {
    console.log('F');
  }
}
*/

// Exercise 9
