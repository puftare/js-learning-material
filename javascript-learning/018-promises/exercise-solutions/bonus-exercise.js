/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/

var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

var promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([promise1, promise2]).then((values) => {
  var firstValue = values[0];
  var secondValue = values[1];
  console.log(values);
  console.log(firstValue, secondValue);
  console.log(firstValue + secondValue);
});
