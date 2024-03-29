// Medium 3.1
let string = "The Flintstones Rock!";
for (let i = 0; i < 10; i++) {
  console.log(string.padStart(string.length + i));
}

// Medium 3.2
let munstersDescription = "The Munsters are creepy and spooky.";
let munstersArr = munstersDescription.split('');
let invertedMunstersArr = [];
munstersArr.forEach(el => {
  if(el === el.toLowerCase()) {
    invertedMunstersArr.push(el.toUpperCase())
  } else if (el === el.toUpperCase()) {
    invertedMunstersArr.push(el.toLowerCase())
  }
});
console.log(invertedMunstersArr.join(''));

// Medium 3.3
function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }

  return factors;
}

console.log(factors(22));