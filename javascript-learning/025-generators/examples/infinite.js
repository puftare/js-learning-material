var counter = function* () {
  var i = 0;
  while (true) {
    yield i;
    i++;
  }
};

var counterGenerator = counter();

// for (var value of counterGenerator) {
//   console.log(value);
// }

var count = 0;

while (count < 5) {
  console.log(counterGenerator.next());
  count++;
}
