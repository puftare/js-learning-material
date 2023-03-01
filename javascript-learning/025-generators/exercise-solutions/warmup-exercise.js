/*
    1. Create a generator function called "countTo10" that will
       yield the numbers 0-10 (inclusive) then stop.

    2. Create the generator object by calling the generator
       function and iterate through the generator using a
       for...of loop.
*/

var countTo10 = function* () {
  let i = 0;
  while (i <= 10) {
    yield i;
    i++;
  }
};

var generatorObject = countTo10();

console.log(generatorObject.next());

for (var value of generatorObject) {
  console.log(value);
}
