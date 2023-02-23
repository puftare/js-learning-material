var asyncGenerator = async function* () {
  var i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
    i++;
    yield* [1, 2, 3];
  }
};

var asyncGeneratorObject = asyncGenerator();

console.log(asyncGenerator);
console.log(asyncGeneratorObject);

var asyncStarter = async () => {
  for await (var number of asyncGeneratorObject) {
    console.log(number);
  }
};

asyncStarter();
console.log("Hello???");
