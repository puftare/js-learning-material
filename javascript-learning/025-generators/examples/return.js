var counter = function* () {
  // pause here and return the generator
  yield 1;
  yield 2;
  return;
  yield 3;
};

console.log(counter);

var counterGenerator = counter();
// var counterGenerator2 = counter();
console.log(counterGenerator);

for (var value of counterGenerator) {
  console.log(value);
}

console.log(counterGenerator.next());
