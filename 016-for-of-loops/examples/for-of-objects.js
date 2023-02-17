var stockItem = {
  id: 54,
  price: 1.32,
  name: "Apple",
  quantity: 6,
};

// console.log(Object.entries(stockItem));

for (var item of Object.values(stockItem)) {
  console.log(item);
}
