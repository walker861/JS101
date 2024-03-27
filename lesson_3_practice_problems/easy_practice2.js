// Easy 2.1
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replaceAll("important", "urgent"));

// Easy 2.2
let numbers = [1, 2, 3, 4, 5];
// using reverse
console.log([...numbers].reverse());
console.log(`numbers: ${numbers}`);
console.log(numbers.slice(0).reverse());
console.log(`numbers: ${numbers}`);
// using sort
console.log([...numbers].sort((num1, num2) => num2 - num1));
console.log(`numbers: ${numbers}`);
console.log(numbers.slice(0).sort((num1, num2) => num2 - num1));
console.log(`numbers: ${numbers}`);

// Easy 2.3
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8; // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// Easy 2.4
let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));
console.log(famousWords);

// Easy 2.5
numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.splice(2, 1);
console.log(numbers);

// Easy 2.6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// forEach
let newFlintstones = [];
flintstones.forEach((el) => {
  newFlintstones = newFlintstones.concat(el);
});
console.log(newFlintstones);
// flat
console.log(flintstones.flat());
// spread operator
console.log([].concat(...flintstones));
// reduce method
console.log(
  flintstones.reduce((acc, curVal) => {
    return acc.concat(curVal);
  }, []),
);

// Easy 2.7
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(
  Object.entries(flintstones)
    .filter((el) => el.includes("Barney"))
    .flat(),
);

// Easy 2.8
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

// Easy 2.9
let title = "Flintstone Family Members";
let padLength = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padLength + title.length));

// Easy 2.10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.match(/t/g).length);
console.log(statement2.match(/t/g) ? statement2.match(/t/g).length : 0 );
