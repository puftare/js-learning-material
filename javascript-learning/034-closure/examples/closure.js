// global scope
// const prices = [1337]; // 3

const wrapperFunction = () => {
  // prices?
  const prices = [100]; // 2

  const logPrices = () => {
    prices.push(200, 300, 400, 500);
    return prices;
  };

  return logPrices;
};

const result1 = wrapperFunction();
console.log(result1());
console.log(result1());
console.log(result1());
const result2 = wrapperFunction();
console.log(result2());
console.log(result2());
console.log(result2());

const saveCounter = () => {
  let counter = 0;

  const increment = () => {
    return counter++;
  };

  return increment;
};

let counterA = saveCounter();
console.log(counterA() + " a");
console.log(counterA() + " a");
console.log(counterA() + " a");
let counterB = saveCounter();
console.log(counterB() + " b");
console.log(counterB() + " b");
console.log(counterB() + " b");
