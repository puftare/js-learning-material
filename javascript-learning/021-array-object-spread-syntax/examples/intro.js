var array = [10, 20, 30, 40, 50];

var arrayCopy1 = [];
for (var value of array) {
  arrayCopy1.push(value);
}
arrayCopy1.push(60);
arrayCopy1.push(70);
arrayCopy1.push(80);

console.log(array);
console.log(arrayCopy1);

var arrayCopy2 = [10, 20, ...array, 60, 70, 80];
console.log(arrayCopy2);
