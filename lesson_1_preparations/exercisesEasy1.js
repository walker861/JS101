const rlSync = require('readline-sync');

// Exercise 1
// Input: integer
// Output: boolean (true if odd)
// Purpose: determine if input is odd
/*
function isOdd(integer) {
  return Math.abs(integer) % 2 === 1;
}
*/

// Exercise 2
// Input: range of integers
// Output: odd numbers in range
// Purpose: loop to display odd numbers in range
/*
// function displayOdd(min = 1, max = 99) {
//   while (min <= max) {
//     if (min % 2 === 1) console.log(min);
//     min += 1;
//   }
// }
*/

// Exercise 3
// Input: range of integers
// Output: even numbers in range
// Purpose: loop to display even numbers in range
/*
// function displayEven(limit = 99) {
//   for (let counter = 1; counter <= limit; counter += 1) {
//     if (counter % 2 === 0) console.log(counter);
//   }
// }
*/

// Exercise 4
// Input: user inputs length & width
// Output: log a string detailing area and unit of measure
/*
SQ_METERS_TO_SQ_FEET = 10.7639;

Original Solution
let length = Number(
  rlSync.question('Enter the length of the room in meters: ')
);
let width = Number(rlSync.question('Enter the length of the room in meters: '));
let area = (length * width).toFixed(2);
console.log(
  `The area of the room is ${area} square meters(${
    area * SQ_METERS_TO_SQ_FEET
  } square feet)`
);

// Ex 4 Further Exploration
*/

// Exercise 5
// Inputs: bill, tipPercentage
// Outputs: tipAmount, totalBill
/*
// let bill = Number(rlSync.question('What is the bill?'));
// let tipPercentage =
//   Number(rlSync.question('What is the tip percentage?')) / 100;
// let tipAmount = bill * tipPercentage;
// let totalBill = bill + tipAmount;
// console.log(`The tip is $${tipAmount}`);
// console.log(`The total is $${totalBill}`);
*/

// Exercise 6
// Inputs: positive integer, sum or product
// Outputs: number (sum or product of all numbers between 1 and input integer, inclusive)
// Algo:
// user input for integer
// user input for operation
// sum operation - while vs for loop
// product operation - while vs for loop
// log result
/*
function sumOrProduct(positiveInteger, operation) {
  positiveInteger = Number(
    rlSync.question('Please enter an integer greater than 0: ')
  );

  operation = rlSync.question(
    'Enter "s" to compute the sum, or "p" to compute the product: '
  );

  if (positiveInteger < 1) {
    console.log('Invalid number. Please select a number greater than 0.');
    return sumOrProduct();
  }

  if (operation === 's') {
    return computeSum(positiveInteger);
  } else if (operation === 'p') {
    return computeProduct(positiveInteger);
  } else {
    console.log(
      'Invalid operation identified. Please enter "s" for sum / addition, or "p" for product / multiplication.'
    );
    return sumOrProduct();
  }
}

function computeSum(positiveInteger) {
  let sum = 0;
  for (let i = 1; i <= positiveInteger; i += 1) {
    sum += i;
  }
  return sum;
}

function computeProduct(positiveInteger) {
  let product = 1;
  for (let i = 1; i <= positiveInteger; i += 1) {
    product *= i;
  }
  return product;
}

sumOrProduct();
*/

// Exercise 7
// Inputs: 2 strings
// Output: 1 string (concatenates short string + long string + short string)
// Algo:
// compare string length
// concatenate strings
/*
function shortLongShort(str1, str2) {
  str1.length > str2.length
    ? console.log(str2 + str1 + str2)
    : console.log(str1 + str2 + str1);
}
*/

// Exercise 8
// Input: positive number (year)
// Output: boolean
// Algo:
// true conditions - divisible by 400, divisible by 4 if not divisible by 100
// false conditions - not divisible by 4, divisible by 4 and 100
/*
// function isLeapYear(year) {
// Original Solution
////////////////////
// if (year % 400 === 0) {
//   return true;
// } else if (year % 100 === 0) {
//   return false;
// } else {
//   return year % 4 === 0;
// }

// Further Exploration
///////////////////////
// if (year % 4 === 0) {
//   return year % 100 !== 0 || year % 400 === 0;
// } else {
//   return false;
// }
// }
*/

// Exercise 9
// Input: positive number (year)
// Output: boolean
// Algo:
// Before 1752:
//  true conditions - divisible by 4
// After 1752:
// true conditions - divisible by 400, divisible by 4 if not divisible by 100
// false conditions - not divisible by 4, divisible by 4 and 100
/*
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 4 === 0) {
    return year % 100 !== 0 || year % 400 === 0;
  } else {
    return false;
  }
}
*/

// Exercise 10
// Input: number (target)
// Output: number (sum)
// Algo:
// initialize sum
// loop through numbers from 1 to target
// determine if divisible by 3 or 5
// add to sum if divisible by 3 or 5
// display sum
/*
function multisum(targetNum) {
  let sum = 0;
  for (let i = 1; i <= targetNum; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
*/

// Exercise 11
// Input: string (utf16Value)
// Output: number (sum of all character codes)
// Algo:
// initialize sum
// loop through utf value by character
// add character code to sum
// display sum
/*
function utf16Value(value) {
  let sum = 0;
  for (let i = 0; i < value.length; i += 1) {
    sum += value.charCodeAt(i);
  }
  return sum;
}
*/
