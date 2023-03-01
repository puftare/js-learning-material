/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: var groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/

var getRandomNumber = function* () {
  for (var i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }
};

var groceryList = function* () {
  var groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
  var groceryLength = groceries.length;
  for (var i = 0; i < groceryLength; i++) {
    var randomIndex = Math.floor(Math.random() * groceries.length);
    //  console.log(randomIndex, groceries.length, groceryLength);
    var removedItem = groceries.splice(randomIndex, 1)[0];
    yield removedItem;
  }
};

var randomNumberGenerator = getRandomNumber();
var groceryGenerator = groceryList();

for (var i = 0; i < 5; i++) {
  var randomNumber = randomNumberGenerator.next().value;
  var grocery = groceryGenerator.next();
  //   console.log(grocery);
  //   var grocery = groceryGenerator.next().value;
  console.log(`${randomNumber} ${grocery.value}`);
}
