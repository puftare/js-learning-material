var asyncGenerator = async function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

var asyncGeneratorObject = asyncGenerator();

console.log(asyncGenerator);
console.log(asyncGeneratorObject);

var asyncGeneratorExecuter = async () => {
  for await (var promise of asyncGeneratorObject) {
    console.log(promise);
  }
};

asyncGeneratorExecuter();
