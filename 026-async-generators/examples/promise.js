var generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

var generatorObject = generator();

console.log(generator);
console.log(generatorObject);
// console.log(generatorObject.next());

// generatorObject.next().value.then((result) => {
//   console.log("result ", result);
// });

// var getObjectsAsync = async () => {
//   for (var promise of generatorObject) {
//     var result = await promise;
//     console.log(result);
//   }
// };

// getObjectsAsync();

for await (var promise of generatorObject) {
  //   var result = await promise;
  console.log(promise);
}
