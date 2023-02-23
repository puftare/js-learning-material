var counter = function* () {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};

var generatorObject = counter();

for (var value of generatorObject) {
  console.log(value);
}

for (var value of [2, 3, 4]) {
  console.log(value);
}
