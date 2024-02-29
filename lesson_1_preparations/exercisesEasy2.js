const rlSync = require('readline-sync');
// Exercise 1
// Input: 1 array, 1 object
// Output: string with greeting by full name and title
// Algo:
// Join array with spaces
// log greeting, name and say something about the title
/*
function greetings(nameArr, careerObj) {
  let fullName = nameArr.join(' ');
  console.log(
    `Hello ${fullName}! It is nice to have the skills of a ${careerObj.title} ${careerObj.occupation} at work today.`
  );
}
*/

// Exercise 2
// Input: string (from user input)
// Output: string (normal if no bang. if bang, all caps)
// Algo:
// user inputs name
// determine if last character of name is bang
// if bang, log in all caps
// if no bang, log in normal case
/*
function greetingUser(user) {
  user = rlSync.question('What is your name? ');
  if (user[user.length - 1] === '!') {
    user = user.slice(0, -1);
    console.log(`HIII ${user.toUpperCase()}. WHY ARE WE SCREAMING?!`);
  } else {
    console.log(`Hello ${user}.`);
  }
}
*/

// Exercise 3
/*
function multiply(num1, num2) {
  return num1 * num2;
}
*/

// Exercise 4
/*
function square(num) {
  return multiply(num, num);
}
*/

// Exercise 5
// Input: numbers (user input positive integers)
// Output: return numbers for each operation (addition, subtraction, division, multiplication, remainder, exponent)
// Algo:
// variable to store user input 1 & 2
// log each computation with the numbers
/*
function arithmeticOps(num1, num2) {
  num1 = Number(rlSync.question('Enter the first number: '));
  num2 = Number(rlSync.question('Enter the second number: '));

  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}
*/

// Exercise 6
// Input: string
// Output: string (next to last word in a string)
// Algo:
// Split input string by space
// identify by -2 for index to return correct string
/*
function penultimate(string) {
  let arr = string.split(' ');
  return arr.slice(-2, -1).toString();
}
*/

// Exercise 7
// Input: two arguments
// Output: boolean
// Algo:
// evaluate argument one for truthiness
// evaluate argument two for truthiness
// return true if 1 argument is truthy
/*
function xor(value1, value2) {
  return (value1 && !value2) || (value2 && !value1);
}
*/

// Exercise 8
// Input: array
// Output: array of every other element of input array
// Algo:
/*
function oddities(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    oddArr.push(arr[i]);
  }
  return oddArr;
}
*/

// Exercise 9
/*
function pickRandomAge(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}

console.log(`Teddy is ${pickRandomAge(20, 120)} years old!`);
*/

// Exercise 10
/*
console.log(`What is your age?`);
let age = rlSync.question();

console.log(`At what age would you like to retire?`);
let retirementAge = rlSync.question();
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

console.log(
  `It's ${currentYear}. You will retire in ${
    currentYear + (retirementAge - age)
  }.\nYou have only ${retirementAge - age} years of work to go!`
);
*/

// Exercise 11
// Input: string
// Output: string of middle character if odd, string middle 2 characters if even
/*
function centerOf(string) {
  let middleChar = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    console.log(string.slice(middleChar - 1, middleChar + 1));
  } else {
    console.log(string[middleChar]);
  }
}
*/

// Exercise 12
// Input: number
// Output: return a negative number
function negative(num) {
  return num <= 0 ? num : -num;
}
