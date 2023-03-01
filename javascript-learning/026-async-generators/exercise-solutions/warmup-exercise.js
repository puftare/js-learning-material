/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program or control-c (mac))
*/

var randomNumbers = async function* () {
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
      }, 1000);
    });
  }
};

var randomNumbersObject = randomNumbers();

var executeRandomNumbers = async () => {
  for await (var number of randomNumbersObject) {
    console.log(number);
  }
};

executeRandomNumbers();
