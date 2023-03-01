var counter = function* () {
  // pause here and return the generator
  yield 1;
  yield 2;
  yield 3;
};

console.log(counter);

var counterGenerator = counter();
// var counterGenerator2 = counter();
console.log(counterGenerator);

for (var count of counterGenerator) {
  console.log(count);
}

var counterObject = counterGenerator.next();
console.log(counterObject);

while (counterObject.done === false) {
  console.log(counterObject.value);
  counterObject = counterGenerator.next();
  console.log(counterObject);
}

console.log("All done!");
