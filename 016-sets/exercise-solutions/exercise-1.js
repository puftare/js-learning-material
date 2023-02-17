/*
    1. Create an array called "points" with the following values:
       [10, 20, 10, 30, 15, 15, 35, 60, 10]

    2. How can you print out all the UNIQUE points inside "points"?
*/

var points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

var uniquePoints = new Set();

for (var i = 0; i < points.length; i++) {
  uniquePoints.add(points[i]);
}

console.log(uniquePoints);

var cheatUniquePoints = new Set(points);
console.log(cheatUniquePoints);
