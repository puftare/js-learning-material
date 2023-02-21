var cities = ["Vancouver", "Mexico City", "Toronto", "London", "Berlin"];

// var vancouver = cities[0];
// var mexicoCity = cities[1];

var [, mexicoCity, ...theRest] = cities;

// console.log(vancouver);
console.log(mexicoCity);
console.log(theRest);
