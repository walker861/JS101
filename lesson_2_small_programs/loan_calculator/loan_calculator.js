const rlSync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return (
    number.trimStart() === '' ||
    number.trimStart() <= 0 ||
    Number.isNaN(Number(number))
  );
}

function getLoanAmount() {
  prompt("What's the loan amount? ");
  let loanAmount = rlSync.question();

  while (invalidNumber(loanAmount)) {
    prompt("Please enter a number greater than 0 for the loan amount.");
    loanAmount = rlSync.question();
  }

  console.log(loanAmount);
  return Number(loanAmount);
}

function getAPR() {
  prompt("What's the APR percentage? ");
  let apr = rlSync.question();

  while (invalidNumber(apr)) {
    prompt("Please enter a number above 0 for the APR percentage.");
    apr = rlSync.question();
  }

  apr = Number(apr) / 100;

  console.log(apr);
  return apr;
}

function getLoanTerm() {
  prompt("What's the length of the loan in months? ");
  let loanTerm = rlSync.question();

  while (invalidNumber(loanTerm)) {
    prompt("Please enter a positive number for months of loan term.");
    loanTerm = rlSync.question();
  }

  console.log(loanTerm);
  return Number(loanTerm);
}

function calculateMonthlyPayment(amount, term, apr) {
  prompt('Welcome to the Loan Calculator!');
  prompt('************************************');
  amount = getLoanAmount();
  term = getLoanTerm();
  apr = getAPR();

  let payment = amount * (apr / (1 - Math.pow(1 + apr, -term)));

  console.log(`$${payment.toFixed(2)}`);
}

calculateMonthlyPayment();
