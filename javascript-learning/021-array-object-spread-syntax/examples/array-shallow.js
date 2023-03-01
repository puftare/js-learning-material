var prices = [[10], [20], [30]];

console.log(prices);

var copy = [...prices];

console.log(copy);

console.log("-------");

prices[0].pop();
console.log(prices);

console.log(copy);
