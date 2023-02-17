var myMap = new Map();

myMap.set("name", "Nader");
myMap.set("age", 20);
myMap.set("friend", "Mr. Monkey");

console.log(myMap);

for (var item of myMap) {
  console.log(item[0], item[1]);
}
