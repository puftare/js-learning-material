var makeTimeout = (ms) => {
  var timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });

  return timeout;
};

console.log("Program starting..."); // 1

var fetchData = async () => {
  console.log("Fetching first set of data..."); // 2
  var result1 = makeTimeout(2000);
  console.log("Fetching second set of data...", result1); // 4
  var result2 = makeTimeout(2000);
  var finalResult = await Promise.all([result1, result2]);
  console.log("Done fetching data!", finalResult); // 5
};

fetchData();

console.log("Program complete..."); // 3
