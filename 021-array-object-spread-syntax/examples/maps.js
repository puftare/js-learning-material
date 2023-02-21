var myMap = new Map();

myMap.set("Monkey", 5);
myMap.set("Tiger", 1);
myMap.set("Elephant", 2);

console.log(myMap);

var myMapArray = [...myMap, "boo!"];

console.log(myMapArray);
