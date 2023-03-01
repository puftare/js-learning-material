var cities = ["Vancouver", "Berlin", "Seattle", "Toronto"];

var concatCities = cities.reduce((concatStrings, city) => {
  if (city === "Vancouver") {
    return concatStrings;
  }
  return concatStrings + city + "-";
}, "");

console.log(concatCities);
