/*
    1. Create a generator function called "randomAmountFromRange"
       which has 3 parameters: amount, min, and max

    2. ^ This function will generate the amount of random numbers
       provided as an argument, between the min and max (inclusive)
       Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19

    3. Create a for...of loop that will loop through the following
       generator objects to test it:
       - randomAmountFromRange(3, 10, 20)
       - randomAmountFromRange(5, 100, 200)
       - randomAmountFromRange(10, 1000, 2000)
*/

var randomAmountFromRange = function* (amount, min, max) {
  for (var i = 0; i < amount; i++) {
    yield Math.floor(Math.random() * (max - min + 1) + min);
  }
};

var generatorObject = randomAmountFromRange(3, 10, 20);
var generatorObject2 = randomAmountFromRange(5, 100, 200);
var generatorObject3 = randomAmountFromRange(10, 1000, 2000);

// for (var value of generatorObject) {
//   console.log(value);
// }

// for (var value of generatorObject2) {
//   console.log(value);
// }

for (var value of generatorObject3) {
  console.log(value);
}
