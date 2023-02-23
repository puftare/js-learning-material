/*
    1. Create an async Generator function that has a single
       parameter called "time". This function will yield a
       Promise that resolves with the time taken after that
       many milliseconds. The time for each subsequent Promise
       will take TWICE as long.

    2. Create the generator object by calling the function ^
       with the value 100 to start.

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program or control-c (mac))

    4. Example output if we started with:
       var timeGeneratorObject = timeGenerator(100)
       for await (var time of timeGeneratorObject)
          - ^ If we logged "time" each loop we'd get:
          - 100, 200, 400, 800, 1600, 3200 ... etc
*/

var backoffGenerator = async function* (time) {
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });
    time *= 2;
  }
};

var backoffGeneratorObject = backoffGenerator(100);

var executeBackoff = async () => {
  for await (var ms of backoffGeneratorObject) {
    console.log(ms);
  }
};
executeBackoff();
