var makeTimeout = (ms) => {
  var timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
      //   reject("there was an error!");
    }, ms);
  });

  return timeout;
};

var causeError = async () => {
  // let result;
  try {
    var result = await makeTimeout(2000);
    console.log(result);
  } catch (error) {
    console.log("we are in the error case, all done");
    console.error(error);
  }
  // down here
};

console.log("program started");
causeError();
console.log("program done");
